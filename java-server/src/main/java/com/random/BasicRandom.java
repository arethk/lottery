package com.random;

import java.util.Random;

public class BasicRandom extends AbstractRandom {
    private static volatile BasicRandom instance;

    private BasicRandom() {
        if (instance != null) {
            throw new IllegalStateException("Cannot create another instance of SingletonExample.");
        }
    }

    public static BasicRandom getInstance() {
        if (instance == null) {
            synchronized (BasicRandom.class) {
                if (instance == null) {
                    instance = new BasicRandom();
                }
            }
        }
        return instance;
    }

    @Override
    public int generateInt(int min, int max) {
        Random random = new Random();
        return random.nextInt(max - min + 1) + min;
    }

}
