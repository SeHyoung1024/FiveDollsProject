package com.spring_boot.projectEx.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	// index 페이지로 이동
	@RequestMapping("/")
	public String index() {
		return "index";
	}
}
 