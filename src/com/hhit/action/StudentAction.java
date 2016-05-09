package com.hhit.action;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.hhit.base.BaseAction;
import com.hhit.entity.Class_;
import com.hhit.entity.Department;
import com.hhit.entity.Favorite;
import com.hhit.entity.Role;
import com.hhit.entity.Student;
import com.hhit.entity.User;
import com.hhit.util.DepartmentUtils;
import com.hhit.util.JsonUtil;
import com.hhit.util.QueryHelper;
import com.opensymphony.xwork2.ActionContext;

@SuppressWarnings("serial")
@Controller
@Scope("prototype")
public class StudentAction extends BaseAction<Student> {

	private Integer departmentId;
	private Integer classId;
	
	private int viewType;// 0姓名；1账号
	private String inputTerm = "";// 输入的词条
	
	// ajax json返回
	private String result;
	//存储图片文件
	private File picture;
	private String pictureFileName;
	
	//我的收藏需要
	
	/** 列表 */
	public String list() throws Exception {
		// 准备数据, departmentList
		List<Department> topList = departmentService.findTopList();
		List<Department> departmentList = DepartmentUtils
				.getAllDepartments(topList);
		ActionContext.getContext().put("departmentList", departmentList);
		// 准备数据, roleList
		List<Role> roleList = roleService.findAll();
		ActionContext.getContext().put("roleList", roleList);
		
		new QueryHelper(Student.class, "s")//
				.addCondition((departmentId != null), "s.department.id=?",departmentId)//
				.addCondition((viewType == 0) && (inputTerm.trim().length() > 0),"s.stuName LIKE ?", "%" + inputTerm + "%")//
				.addCondition((viewType == 1) && (inputTerm.trim().length() > 0),"s.stuNum LIKE ?", "%" + inputTerm + "%")//
				.preparePageBean(studentService, pageNum, pageSize);

		return "list";
	}
	/** 删除 */
	public String delete() throws Exception{
		studentService.delete(model.getId());
		 return "toList";
	}
	/** 批量删除 */
	public String bulkDelete() throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		// 直接根据id删除
		userDetailsService.delete(model.getId());
		result = "ok";
		map.put("name", result);
		JsonUtil.toJson(ServletActionContext.getResponse(), map);

		return null;
	}
	
	/** 添加界面 */
	public String addUI() throws Exception{
		// 准备数据, departmentList
		List<Department> topList = departmentService.findTopList();
		List<Department> departmentList = DepartmentUtils.getAllDepartments(topList);
		ActionContext.getContext().put("departmentList", departmentList);
		
		return "saveUI";
	}
	/** 添加 */
	public String add() throws Exception {
		/** 保存用户相应信息 */
		// 封装到对象中（当model是实体类型时，也可以使用model，但要设置未封装的属性）
		// >> 设置所属部门
		model.setDepartment(departmentService.findById(departmentId));
		// 保存数据库
		studentService.save(model);
		// ** 保存用户登陆信息 */
		// >> 设置默认密码为账号（要使用MD5摘要）
		User userModel = new User();
		String md5Digest = DigestUtils.md5Hex(model.getStuNum());
		userModel.setPassword(md5Digest);
		userModel.setStudent(model);
		userModel.setUserNum(model.getStuNum());
		userModel.setUserType("学生");
		// 保存到数据库
		userService.save(userModel);

		return "toList";
	}
	/** 修改页面 */
	public String editUI() throws Exception {
		// 准备数据, departmentList
		List<Department> topList = departmentService.findTopList();
		List<Department> departmentList = DepartmentUtils
				.getAllDepartments(topList);
		ActionContext.getContext().put("departmentList", departmentList);
		
		// 准备回显的数据
		Student stuFind=studentService.findById(model.getId());
		ActionContext.getContext().getValueStack().push(stuFind);
		
		// 准备数据, classList==>部门
		List<Class_> classList=classService.findByDept(stuFind.getDepartment());
		ActionContext.getContext().put("classList", classList);
		
		if (stuFind.getDepartment() != null) {
			departmentId = stuFind.getDepartment().getId();
		}
		if(stuFind.getClass_()!=null){
			classId=stuFind.getClass_().getId();
		}

		return "saveUI";
	}
	/** 修改 */
	public String edit() throws Exception {
		// 1，从数据库中取出原对象
		Student stuFind=studentService.findById(model.getId());

		// 2，设置要修改的属性
		stuFind.setBirthday(model.getBirthday());
		stuFind.setClass_(model.getClass_());
		stuFind.setGrade(model.getGrade());
		stuFind.setSex(model.getSex());
		stuFind.setStuName(model.getStuName());
		stuFind.setStuNum(model.getStuNum());
		// >> 设置所属部门和班级
		stuFind.setDepartment(departmentService.findById(departmentId));
		stuFind.setClass_(classService.findById(classId));
		
		// 3，更新到数据库
		studentService.update(stuFind);

		return "toList";
	}
	/** 个人信息维护界面  */
	public String personalMaintainUI() throws Exception{
		//得到学生放到栈顶
		ActionContext.getContext().getValueStack().push(getCurrentUser().getStudent());
		
		return "personalMaintainUI";
	}
	/** 提交个人信息 */
	public String personalMaintain() throws Exception{
		//取出源对象
		Student stuFind=getCurrentUser().getStudent();
		if (picture != null) {
			// 获取当前应用程序物理路径
			String rootPath = ServletActionContext.getServletContext()
					.getRealPath("/");
			File tarDir = new File(rootPath + "/studentImgs");
			if (!tarDir.exists()) {
				tarDir.mkdirs();
			}
			//设置图片名为自己的学号
			//-->以.切分
			String [] strArray = pictureFileName.split("\\."); 
			SimpleDateFormat sdf =   new SimpleDateFormat( "-yyyy-MM-dd-HH-mm-ss" );
			String timeString=sdf.format(new Date());
			pictureFileName=getCurrentUser().getUserNum()+timeString+"."+strArray[strArray.length-1];
			File tarFile = new File(tarDir, pictureFileName);
			try {
				FileUtils.copyFile(picture, tarFile);
			} catch (IOException e) {
				e.printStackTrace();
			}
			//设置图片
			stuFind.setPhoto(pictureFileName);
		}
		//设置其他属性
		stuFind.setBirthday(model.getBirthday());
		stuFind.setSex(model.getSex());
		stuFind.setStuName(model.getStuName());
		
		//更新
		studentService.update(stuFind);
		return "personalMaintain";
	}
	/** 我的收藏 */
	public String myFavorite() throws Exception{
		//准备信息--所有课程类型
//		ActionContext.getContext().put("professionTypeList", spiderProfessionTypeService.findAll());
		//准备信息--点击的课程类型名
//		if(professionId!=null){
//			ActionContext.getContext().getValueStack().push(spiderProfessionTypeService.findById(professionId));
//			ActionContext.getContext().put("professionId", professionId);
//		}
			
		//分页信息
		new QueryHelper(Favorite.class, "f")//
		.addCondition("f.student=?", getCurrentUser().getStudent())
		.preparePageBean(favoriteService, pageNum, 12);
		
		return "myFavorite";
	}
	
	public Integer getDepartmentId() {
		return departmentId;
	}
	public void setDepartmentId(Integer departmentId) {
		this.departmentId = departmentId;
	}
	public int getViewType() {
		return viewType;
	}
	public void setViewType(int viewType) {
		this.viewType = viewType;
	}
	public String getInputTerm() {
		return inputTerm;
	}
	public void setInputTerm(String inputTerm) {
		this.inputTerm = inputTerm;
	}
	public Integer getClassId() {
		return classId;
	}
	public void setClassId(Integer classId) {
		this.classId = classId;
	}
	public File getPicture() {
		return picture;
	}
	public void setPicture(File picture) {
		this.picture = picture;
	}
	public String getPictureFileName() {
		return pictureFileName;
	}
	public void setPictureFileName(String pictureFileName) {
		this.pictureFileName = pictureFileName;
	}

	
	
}
