package com.random;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public abstract class AbstractRandom {
    public abstract int generateInt(int min, int max);

    public List<Integer> generateList(int entries, int min, int max) {
        List<Integer> list = new ArrayList<>();
        while (list.size() < entries) {
            int value = this.generateInt(min, max);
            if (list.contains(value) == false) {
                list.add(value);
            }
        }
        Collections.sort(list);
        return list;
    }
}
