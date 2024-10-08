<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="/css/join.css" rel="stylesheet" type="text/css">
</head>
<body>
	<div class="main-signup">
        <!--웹페이지 상단-->
        <header>
            <!--NAVER LOGO-->
            <div class="logo">
                <h1><a href="/">Five Dolls</a></h1>
            </div>
        </header>

        <!--회원가입 부분-->
        <section class="signup-wrap">

            <div>
                <!--아이디,비번,비번재확인-->

                <h3>아이디</h3>
                <span class="signup-input">
                    <input id="signup-id" type="text"></input>
                    <!-- <span class="signup-at">@naver.com</span> -->
                </span>

                <h3>비밀번호</h3>
                <span class="signup-input">
                    <input id="signup-pw" type="text"></input>
                    <span class="pw-lock"></span>
                </span>

                <h3>비밀번호 재확인</h3>
                <span class="signup-input">
                    <input id="signup-pww" type="text"></input>
                    <span class="pww-lock"></span>
                </span>

            </div>

            <div style="margin-top: 35px;">
                <!--이름,생년월일,성별,이메일-->
                <h3>이름</h3>
                <span class="signup-input">
                    <input id="signup-name" type="text"></input>
                </span>

                <!-- <h3>생년월일</h3>
                <span style="display: flex;">
                    <span class="signup-input-birth">
                        <input id="signup-birth-yy" type="text" placeholder="년(4자)"></input>
                    </span>
                    <span class="signup-input-birth" style="margin-left: 10px;">
                        <select id="signup-birth-mm" class="selectbox" name="month" onchange="">
                            <option value="month">월</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </span>
                    <span class="signup-input-birth" style="margin-left: 10px;">
                        <input id="signup-birth-dd" type="text" placeholder="일"></input>
                    </span>
                </span> -->

                <h3>성별</h3>
                <span class="signup-input">
                    <select id="signup-gender" class="selectbox" name="gender" onchange="">
                        <option value="gender">성별</option>
                        <option value="man">남자</option>
                        <option value="woman">여자</option>
                        <option value="no">선택 안함</option>
                    </select>
                </span>

                <span class="choice">
                    <h3>본인 확인 이메일</h3>
                    <span>(선택)</span>
                </span>
                <span class="signup-input">
                    <input id="signup-email" type="text" placeholder="선택입력"></input>
                </span>

            </div>

            <div style="margin-top: 35px;">
                <!--휴대전화-->
                <h3>휴대전화</h3>
                <!-- <span class="signup-input">
                    <select id="signup-country" class="selectbox" name="country" onchange="">
                        <option value="ko">대한민국 +82</option>
                    </select>
                </span> -->
                <div style="display: flex;">
                    <span class="signup-input" style="width:100%; margin: 10px 0px 0px 0px">
                        <input id="signup-phone" type="text" placeholder="전화번호 입력"></input>
                    </span>
                </div>  
            </div>      
             

            <div>
                <!--가입하기-->
                <div class="signup-btn-wrap">
                    <button id="signup-btn">가입하기</button>
                </div>
            </div>
        </section>

            </div>
        

</body>
</html>