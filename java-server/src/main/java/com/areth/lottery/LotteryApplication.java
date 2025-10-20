package com.areth.lottery;

import java.time.Instant;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.random.BasicRandom;

@SpringBootApplication
@RestController
public class LotteryApplication {

	public static void main(String[] args) {
		SpringApplication.run(LotteryApplication.class, args);
	}

	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}

	@GetMapping("/lottery")
	public LotteryResponseDTO lottery() {
		long unixTimestamp = Instant.now().getEpochSecond();
		BasicRandom br = new BasicRandom();
		String algorithm = "java basic";
		LotteryResponseDTO dto = new LotteryResponseDTO(unixTimestamp, br.generateList(6, 1, 69), algorithm);
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			Thread.currentThread().interrupt();
		}
		return dto;
	}

}
