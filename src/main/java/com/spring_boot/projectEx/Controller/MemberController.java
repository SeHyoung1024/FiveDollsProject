package com.spring_boot.projectEx.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MemberController {
	
	@RequestMapping("/member/loginForm")
	public String loginForm() {
		return "member/loginForm";
	}
	
	@RequestMapping("/member/privacyPolicy")
	public String privacyPolicy(){
		return "member/privacyPolicy";
	}
	
	@RequestMapping("/member/joinForm")
	public String joinForm() {
		return "member/joinForm";
	}
	
	@RequestMapping("/member/searchId")
	public String searchId() {
		return "member/searchId";
	}
	
}
