/**
 * 주문수량 , 주문금액 계산 
 */
 
 window.onload=function(){
 	
 	qty=1;
 	
 	plusBtn = document.getElementById('plusBtn'); // 수량 증가 버튼
 	minusBtn = document.getElementById('minusBtn'); // 수량 감소 버튼
 	
 	plusBtn.addEventListener('click',()=>{
 		qtyChange(1); // 주문 수량 변경하는 함수 호출(사용자 정의 함수)
 	});
 	
 	minusBtn.addEventListener('click',()=>{
 		qtyChange(-1); // 주문 수량 변경하는 함수 호출(사용자 정의 함수)
 	});
 	
 	// 주문 수량 변경 함수
 	function qtyChange(num){
 		qty = qty+num;
 		
 		if(qty < 1){
 			qty = 1;
			// 주문액 계산하는 함수 호출
			calAmount();
 		}
 	}
 	
 	// 주문수량 변경될 때 주문액 계산해서 출력하는 함수
 	function calAmount(){
 		// 현재 주문수량 주문 예정금액 태그의 참조값 추출
 		cartQty = document.getElementById('cartQty'); // 수량
 		// <span> 태그의 data-price 속성 값 추출
 		price = document.getElementById('price').dataset.price;
 		amount = document.getElementById('amount'); // 계산해서 출력할 태그
 		
 		let total = qty * price;
 		
 		// 결과값 반영
 		cartQty.value = qty;
 		amount.innerHTML = total.toLacaleString(); // 천단위 구분
 		
 	}
 	
 	
 	
 	
 	
 	
 	
 } // onload 끝