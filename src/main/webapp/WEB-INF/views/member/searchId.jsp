<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="/css/searchId.css" rel="stylesheet" type="text/css">

</head>
<body>
	<div class="pwFind-form">
    <form action="pwFindForm_ok.do" method="post" class="form-horizontal" name="pfrm">
	
      	<div class="row">
        	<div align="center">
			<h2>아이디 찾기</h2>
		</div>	
      	</div>			
        <div class="form-group row">
		<label class="col-form-label col-4">이름</label>
		<div class="col-8">
			<input type="text" class="form-control" name="id" placeholder="이름을 입력하세요." required="required">
		</div>        	
        </div>

	<div class="form-group row">
		<label class="col-form-label col-4">이메일</label>
		<div class="col-8">
			<input type="text" class="form-control" name="mail" placeholder="이메일을 입력하세요." required="required">
		</div>        	
        </div>
        <div class="form-group row">
		<label class="col-form-label col-4">이름</label>
		<div class="col-8">
			<input type="text" class="form-control" name="id" placeholder="이름을 입력하세요." required="required">
		</div>        	
        </div>

	<div class="form-group row">
		<label class="col-form-label col-4">전화번호</label>
		<div class="col-8">
			<input type="text" class="form-control" name="mail" placeholder="전화번호를 입력하세요." required="required">
		</div>        	
        </div>
	<div class="form-group row">
		<button type="submit" id="submit" class="btn btn-primary btn-lg">아이디 찾기</button>
	</div>		

    </form>
</div>
</body>
</html>