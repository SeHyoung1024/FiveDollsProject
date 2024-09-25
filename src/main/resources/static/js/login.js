/**
 *  비동기 통신 (ajax) 활용한 login submit
 */
 
 $(document).ready(function(){
 	$('#loginForm').on('submit' , function(){
 		event.preventDefault(); // 기본 submit 기능 중단
 		const data = {
 			id  : $('#id').val() ,
 			pwd : $('#pwd').val() 
 		};
 		const result = commonAjax("post", "/member/login", data, "text");
 		// 통신 후 처리
 		if(result === 'success'){
 		}
 		
 		
 	
 	}); // on 끝
 }); // ready 끝