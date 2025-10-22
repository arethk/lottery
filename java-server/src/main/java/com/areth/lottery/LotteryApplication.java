package com.areth.lottery;

import java.time.Instant;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.random.BasicRandom;
import com.random.MersenneTwisterRandom;

@SpringBootApplication
@RestController
public class LotteryApplication {
	public static final int LOTTERY_ENTRIES = 6;
	public static final int LOTTERY_MIN = 1;
	public static final int LOTTERY_MAX = 69;

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
		LotteryResponseDTO dto = null;
		if (MersenneTwisterRandom.getInstance().getRandomBool() == true) {
			String algorithm = "java mt";
			dto = new LotteryResponseDTO(unixTimestamp, MersenneTwisterRandom.getInstance().generateList(LOTTERY_ENTRIES, LOTTERY_MIN, LOTTERY_MAX), algorithm);
		} else {
			String algorithm = "java basic";
			dto = new LotteryResponseDTO(unixTimestamp, BasicRandom.getInstance().generateList(LOTTERY_ENTRIES, LOTTERY_MIN, LOTTERY_MAX), algorithm);
		}
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			Thread.currentThread().interrupt();
		}
		return dto;
	}

}
