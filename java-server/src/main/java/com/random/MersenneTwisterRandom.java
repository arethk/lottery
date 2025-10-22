package com.random;

import org.apache.commons.math3.random.MersenneTwister;

public class MersenneTwisterRandom extends AbstractRandom {
    private static volatile MersenneTwisterRandom instance;
    private MersenneTwister m;

    private MersenneTwisterRandom() {
        if (instance != null) {
            throw new IllegalStateException("Cannot create another instance of SingletonExample.");
        }
        m = new MersenneTwister();
        
    }

    public static MersenneTwisterRandom getInstance() {
        if (instance == null) {
            synchronized (MersenneTwisterRandom.class) {
                if (instance == null) {
                    instance = new MersenneTwisterRandom();
                }
            }
        }
        return instance;
    }

    @Override
    public int generateInt(int min, int max) {
        // Returns a pseudorandom, uniformly distributed int value between 0 (inclusive) 
        // and the specified value (exclusive), drawn from this random number generator's sequence. 
        return m.nextInt(max) + min;
    }

    public boolean getRandomBool() {
        return m.nextBoolean();
    }

}
