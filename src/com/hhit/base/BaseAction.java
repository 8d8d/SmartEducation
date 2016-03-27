package com.hhit.base;

import java.lang.reflect.ParameterizedType;

import javax.annotation.Resource;

import com.hhit.entity.User;
import com.hhit.service.IDepartmentService;
import com.hhit.service.IRoleService;
import com.hhit.service.IUserDetailsService;
import com.hhit.service.IUserService;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

@SuppressWarnings("serial")
public abstract class BaseAction<T> extends ActionSupport implements
		ModelDriven<T> {

	// =============== ModelDriven的支持 ==================
	protected T model;

	@SuppressWarnings("unchecked")
	public BaseAction() {
		try {
			// 通过反射获取model的真实类型
			ParameterizedType pt = (ParameterizedType) this.getClass()
					.getGenericSuperclass();
			Class<T> clazz = (Class<T>) pt.getActualTypeArguments()[0];
			// 通过反射创建model的实例
			model = clazz.newInstance();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	public T getModel() {
		return model;
	}

	
	
	
	// =============== Service实例的声明 ==================
	
	@Resource
	protected IUserService userService;//登录用户
	@Resource
	protected IUserDetailsService userDetailsService;//用户详细信息
	@Resource
	protected IRoleService roleService;//角色
	@Resource
	protected IDepartmentService departmentService;//部门
	
	/**
	 * 获取当前登录的用户
	 * 
	 * @return
	 */
	protected User getCurrentUser() {
		return (User) ActionContext.getContext().getSession().get("user");
	}

	
	
	// ============== 分页用的参数 =============
}
