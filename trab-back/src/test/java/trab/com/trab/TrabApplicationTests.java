package trab.com.trab;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import trab.com.trab.service.AuthenticateService;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class trabApplicationTests {

	@Test
	void contextLoads() {
	}

    @Autowired
    private AuthenticateService authenticateService;

    @Test
    void deveAutenticarComCredenciaisValidas() {
        boolean autenticado = authenticateService.authenticate("admin", "123") != null;
        assertTrue(autenticado);
    }

    @Test
    void deveFalharComCredenciaisInvalidas() {
        boolean autenticado = authenticateService.testauthenticate("admin", "senhaErrada") != null;
        assertFalse(autenticado);
    }

}
