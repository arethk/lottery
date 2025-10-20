package com.areth.lottery;

import java.util.List;

public class LotteryResponseDTO {
    public long timestamp;
    public List<Integer> results;
    public String algorithm;

    public LotteryResponseDTO(long timestamp, List<Integer> results, String algorithm) {
        this.timestamp = timestamp;
        this.results = results;
        this.algorithm = algorithm;
    }
}
