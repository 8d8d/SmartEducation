<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>显示所有用户</title>
    <%@include file="/WEB-INF/jsp/public/commons.jspf" %>
  </head>
  <body>
  <!--  
	<c:forEach items="${users}" var="ur" varStatus="st">
      ${ur.userNum}
      ${ur.password}
      <br/>
    </c:forEach>-->
    <table cellspacing="0" cellpadding="0" class="TableStyle">
        <!-- 表头-->
        <thead>
            <tr align=center valign=middle id=TableTitle>
            	<td width="150px">部门名称</td>
            	<td width="150px">姓名</td>
				<td width="150px">账号</td>
				<td width="150px">角色</td>
				<td width="150px">账户状态</td>
				<td width="150px">相关操作</td>
            </tr>
        </thead>

		<!--显示数据列表-->
        <tbody id="TableData" class="dataContainer" datakey="userDetailsList">
        
           <s:iterator value="#userDetailsList">
			<tr class="TableDetail1 template">
				<td>${department.deptName}&nbsp;</td>
			    <td>${userName}&nbsp;</td>
  			<td>${user.userNum}&nbsp;</td>
  			<td>
               	<s:iterator value="roles">
                		${roleName}
                	</s:iterator>
             </td>
				<td>  
					<s:if test="%{user.isUsable==1}">
						正在用
					</s:if>
					<s:if test="%{user.isUsable!=1}">
						<font color="red">已禁用 </font>
					</s:if>
				</td>
				<!--<td>${deptDescription}&nbsp;</td>-->
				<td>
					<s:a action="userDetails_delete?id=%{id}" onclick="return window.confirm('这将删除所有的下级部门，您确定要删除吗？')">删除</s:a>
					<s:if test="%{user.isUsable==1}">
						<s:a action="userDetails_stopUser?id=%{id}">禁用</s:a>
					</s:if>
					<s:else>
						<s:a action="userDetails_enableUser?id=%{id}">启用</s:a>
					</s:else>
					<s:a action="userDetails_editUI?id=%{id}">
						修改
					</s:a>
					<s:a action="userDetails_initPassword?id=%{id}">
						初始化密码
					</s:a>
					&nbsp;
				</td>
			</tr>
		</s:iterator>	
			
        </tbody>
    </table>
     <!-- 其他功能超链接 -->
    <div id="TableTail">
        <div id="TableTail_inside">
            <s:a action="userDetails_addUI">添加用户</s:a>
        </div>
    </div>
  </body>
</html>
