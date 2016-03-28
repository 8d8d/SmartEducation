<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>智慧教育后台登录界面</title>
    <%@include file="/WEB-INF/jsp/public/commons.jspf" %>
    <script type="text/javascript">
	function changeValidateCode(obj) {
		//获取当前的时间作为参数，无具体意义    
		var timenow = new Date().getTime();
		//每次请求需要一个不同的参数，否则可能会返回同样的验证码    
		//这和浏览器的缓存机制有关系，也可以把页面设置为不缓存，这样就不用这个参数了。    
		obj.src = "rand.action?d=" + timenow;
	}
</script>
  </head>
  <body>
   <form action="user_login.action" method="post">
   <font color="red"><s:fielderror fieldName="login"/></font>
   <br/>
    用户名：<input type="text" name="userNum" id="userNameLogin"  />
    <br/> 
    密码：<input type="password" name="password" id="userPassword"/>
    <br/>
    <input type="text" name="randomCode" id="code" >
    <img src="rand.action" onclick="changeValidateCode(this)" title="点击图片刷新验证码" style={width:30px;height:40px}/>
    <br/>
    <input type="radio" value="管理员" name="userType" checked="checked" />管理员
    <br/>
    <input type="radio" value="负责人" name="userType" />负责人
    
    <br/>
        <input type="radio" value="学生" name="userType" />学生
    <br/>
        <input type="radio" value="老师" name="userType" />老师
    <br/>
    <input type="submit" id= "submitForm" value="登录"/>
    </form>
  </body>
</html>
