package id.hayalzahri.introduce;

import org.junit.jupiter.api.Test;
import org.springframework.ui.ExtendedModelMap;

import static org.assertj.core.api.Assertions.assertThat;

class ProfileControllerTest {
    @Test
    void homePopulatesProfileDetailsAndReturnsIndexView() {
        ExtendedModelMap model = new ExtendedModelMap();

        String viewName = new ProfileController().home(model);

        assertThat(viewName).isEqualTo("index");
        assertThat(model.getAttribute("fullName")).isEqualTo("Muhammad Hayal Zahri");
        assertThat(model.getAttribute("campus")).isEqualTo("Universitas Bandar Lampung");
        assertThat(model.getAttribute("whatsapp")).isEqualTo("https://wa.me/6282179671166");
        assertThat(model.getAttribute("instagram")).isEqualTo("https://www.instagram.com/zxyuu.21");
        assertThat(model.getAttribute("tiktok"))
                .isEqualTo("https://www.tiktok.com/@z.xyuu?_r=1&_t=ZS-9AO1VzYzSaK");
    }
}