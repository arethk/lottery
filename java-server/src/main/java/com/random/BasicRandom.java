package com.random;

import java.util.Random;

public class BasicRandom extends AbstractRandom {

    @Override
    public int generateInt(int min, int max) {
        Random random = new Random();
        return random.nextInt(max - min + 1) + min;
    }
    
}
