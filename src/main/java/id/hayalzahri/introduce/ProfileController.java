package id.hayalzahri.introduce;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProfileController {
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("fullName", "Muhammad Hayal Zahri");
        model.addAttribute("campus", "Universitas Bandar Lampung");
        model.addAttribute("whatsapp", "https://wa.me/6282179671166");
        model.addAttribute("instagram", "https://www.instagram.com/zxyuu.21");
        model.addAttribute("tiktok", "https://www.tiktok.com/@z.xyuu?_r=1&_t=ZS-9AO1VzYzSaK");
        return "index";
    }
}