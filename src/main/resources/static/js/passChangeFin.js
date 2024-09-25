/**
 * 
 */
 
 $(document).ready(function(){
 	$("#changeForm").submit(function(){
 		event.preventDefault();
 		
 		beforePwd = $("#beforePwd").val();
 		afterPwd = $("#afterPwd").val();
 		
 		if(beforePwd != afterPwd){
 			alert("입력한 두 비밀번호가 다릅니다");
 			$("beforePwd").val(null);
 			$("afterPwd").val(null);
 		}else{
 			$.ajax({
 				type : "post" ,
 				url : "/member/pwdChange" ,
 				data : {"pwd" : $("#afterPwd").val().toString()} ,
 				success : function(result){
 					if(result == 1){
 						alert("비밀번호 변경이 완료되었습니다");
 						location.href="/member/myPage";
 					}else{
 						alert("변경 오류 다시 시도하세요");
 						location.href="member/myInfoUpdateForm";
 					}
 				} ,
 				error : function(){
 					alert("요청 실패");
 				}
 				
 			});
 		}
 		
 		
 	});
 
 });