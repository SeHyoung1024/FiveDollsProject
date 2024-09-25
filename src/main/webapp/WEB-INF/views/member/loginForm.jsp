<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="/css/login.css" rel="stylesheet" type="text/css">
</head>
<body>
	<!-- <div class="container" id="container">
  		<div class="form-container sign-up-container">
    		<form action="#">
      		<h1>Create Account</h1>
      		<div class="social-container">
        		<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        		<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        		<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      		</div>
      	<span>or use your email for registration</span>
      		<input type="text" placeholder="Name" />
      		<input type="email" placeholder="Email" />
      		<input type="password" placeholder="Password" />
      	<button>Sign Up</button>
    </form>
  </div> -->
  <div class="form-container sign-in-container">
    <form action="#">
      <a href="/"><h1>Five Dolls</h1></a>
      <!-- <div class="social-container">
        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div> -->
      <!-- <span>or use your account</span> -->
      <div id = "inputbox">
      	<input type="user_id" placeholder="아이디" />
      	<input type="user_pwd" placeholder="비밀번호" />
      </div>
      <div id="finemenu">
      	<a href="<c:url value='/member/privacyPolicy'/>">회원가입</a>
      	<a href="<c:url value='/member/searchId'/>">아이디 찾기</a>
      	<a href="#">비밀번호 찾기</a>
      </div>
      <div id="social">
      	<a href=""><img src= "../images/naverlogin.png"></a>
      	<a href=""><img src= "../images/kakaologin.png"></a>
      </div>
      <div id=loginbox>
      	<button>로그인</button>
      </div>
      
    </form>
  <!-- </div> -->
  <!-- <div class="overlay-container"> -->
    <!-- <div class="overlay">
      <div class="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button class="ghost" id="signIn">Sign In</button>
      </div> -->
      <!-- <div class="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button class="ghost" id="signUp">Sign Up</button>
      </div> -->
    <!-- </div> -->
  </div>
</div>
</body>
</html>