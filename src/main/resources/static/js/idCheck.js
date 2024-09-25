/**
 *  ID 중복 조회
 */
 
 $(document).ready(function(){
 	$('#idCheck').click(function(){
 		event.preventDefault();
 		
 		let memId = $('#memId').val();
 		
 		if(memId == ""){
 			alert("아이디를 입력하세요");
 		}else{
 			$.ajax({
 				type : "post" ,
 				url : "/member/idCheck" , 
 				data : {"id" : $('#memId').val()} ,
 				dataType : "text" ,
 				success : function(result){
 					// 컨트롤러에서 정수를 반환받아 해당 정수의 값을 이용해서 진행
 					// 기존 id면 정수 1 반환 아니면 0 반환
 					if(result>0){
 						alert("사용할 수 없는 ID 입니다");
 					}else{
 						alert("사용 가능한 ID 입니다");
 					}
 				} ,
 				error : function(){
 					alert("요청 실패");
 				}
 			
 			}) // ajax 끝
 		} // if else 끝
 		
 	
 	}); // click 끝
 
 }); // ready 끝