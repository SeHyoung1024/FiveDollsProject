/**
 * 비밀번호 변경 기능 진행 중 현재 비밀번호 체크하는 기능
 */
 
 $(document).ready(function(){
 	$("#pwdChange").on('click' , function(){
 		pwdOri = $("#memPwd").val();
 		
 		// 서버로 요청
 		$.ajax({
 			type : "post" , 
 			url : "/member/chkPwd" ,
 			data : {"chkdata" : pwdOri.toString()} , // 숫자로만 되어있는 비밀번호가 숫자로 전달되는 것 방지
 			success : function(result){
 				if(result == 1){
 					location.href="/member/changePassForm"; // 현재 비밀번호 맞으면 비밀번호 변경 폼으로 이동
 				}else{
 					alert("현재 비밀번호가 틀립니다 다시 입력하세요");
 					$(#"memPwd").val(null); // 기존값 삭제
 				}
 			} , 
 			error : function(){
 				alert("요청 실패")
 			}
 		
 		}); // ajax 끝
 		
 	}); // on 끝
 
 }); // ready 끝