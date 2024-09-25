/**
 *  장바구니 목록보기 페이지
 *  목록 선택 가능
 *  선택된 목록 삭제
 */
 
 $(document).ready(function(){
 	// [전체선택] 체크박스 체크 했을 때 개별 체크박스 모두 체크
 	// [전체선택] 체크박스 체크 해제하면 개별 체크박스 모두 체크 해제
 	$("#allCheck").on('click',function(){
 		let chk = $("#allCheck").prop("checked"); // prop(속성명) : 해당 속성의 값을 반환 , 
 		// 체크박스는 checked 속셍어 현재 상태가 저장되어 있음 (T/F)
 		if(chk){ // 전체 선택이 체크되어져 있으면 상품별 체크박스를 전부 체크
 			$(".chkDelete").prop("checked" , true); // prop(속성명,값) : 해당 속성의 값을 전달되는 값으로 변경
 		}else{
 			$(".chkDelete").prop("checked" , false);
 		}
 		
 	});
 	// 개별 체크박스 해제 할 경우 [전체선택] 체크박스 해제
 	// 개별 체크박스가 모두 체크 되었을 때 [전체선택] 체크
 	$(".chkDelete").on('click',function(){
 		let total = $(".chkDelete").length; // 개별 체크박스의 전체 개수
 		let checked = $(".chkDelete:checked").length; // 개별 체크박스 중 선택되어져 있는 체크박스의 개수
 		
 		if(total != checked){
 			$("#allCheck").prop(false);
 		}else{
 			$("#allCheck").prop(true)
 		}
 	
 	});
 	// [삭제]버튼 클랙했을 때 장바구나에서 선택된 값을 삭제
 	$("#deleteCartBtn").on('click',function(){
 		// 선택여부 확인 : 체크박스에 체크가 하나라도 되어 있으면 true , 선택 안되어있으면 false
 		let checked = $(".chkDelete").is(":checked");
 		
 		if(checked){ // 하나라도 선택한 경우 , 삭제하깆전 질문
 			let answer = confirm("선택한 상품을 삭제하시겠습니까?"); // 예 / 아니오 (T/F)
 			if(answer){ // true 면
 				let checkArr = new Array();
 				// 삭제 상품 1~n개 까지 이므로 배열에 담아서 서버로 전송
 				// 체크된 체크박스의 cartNo 배열에 추가
 				$('.chkDelete:checked').each(function(){
 					checkArr.push($(this).val());
 				});
 				// 서버로 전송
 				$.ajax({
 					type : "post" ,
 					url : "/product/deleteCart" ,
 					data : {"chkbox" : checkArr} ,
 					success : function(result){ // 서버 컨트롤러에서 삭제를 성공하면 result에 숫자 1 반환
 						if(result==1){ // 삭제 완료되면 삭제가 완료된 cartList 출력
 							location.href="/product/cartList"; // 삭제가 완료된 목록을 요청
 						}else{
 						
 						}
 						
 					} ,
 					error : function(){
 						alert("실패");
 					}
 					
 				}); // ajax 끝
 			} // if 끝
 		}else{ // 아무것도 선택하지 않은 경우
 			alert("선택된 상품이 없습니다");
 		} // else 끝
 	
 	});
 	
 	// 주문 수량 변경시 구매 예정금액 수정하는 변경 처리
 	let amount = $('.amount');
 	let price = $('.price');
 	let sum = 0;
 	
 	// 주문수량 수정시 수량 inputbox 각각에 keyup 이벤트 적용되도록 구성 %.each()
 	$.each($('.cartQty'), function(i){
 		$(this).on('keyup',function(){
 			let qty = %(this).val();
 			amount[i].dataset.amount = (price[i].dataset.price * qty)
 			amount[i].innerHTML =  (price[i].dataset.price * qty).toLocaleString();
 			
 			// ssum 구하는 함수 호출
 			sumAmount();
 		
 		}); // on keyup 끝
		
		function sumAmount(){
			$('#total').text(sum.toLocaleString());
		}
 		
 	}); // each 끝
 	
 	function sumAmount(){
 		$('.amount').each(function(){
 			sum += Number($(this).arrt("data-amount"));
 		});
 	}
 	
 });
 
 
 
 