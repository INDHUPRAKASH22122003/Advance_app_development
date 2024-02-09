package com.birthday.birthday.mapper;

import com.birthday.birthday.dto.Fooddto;
import com.birthday.birthday.entity.Foodentity;
public class Foodmapper {

    public static Fooddto maptoServicedto(Foodentity enqentity) {
        // Implement the mapping logic
        return new Fooddto(
                enqentity.getId(),
                enqentity.getName(),
                enqentity.getCategory(),
                enqentity.getPrice()
                
        );
    }

    public static Foodentity maptoServiceentity(Fooddto enqdto) {
        // Implement the mapping logic
        return new Foodentity(
                enqdto.getId(),
                enqdto.getName(),
                enqdto.getCategory(),
                enqdto.getPrice()
            
        );
    }
}

