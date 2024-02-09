package com.birthday.birthday.mapper;

import com.birthday.birthday.dto.Eventdto;
import com.birthday.birthday.entity.Evententity;

public class Eventmapper {

    public static Eventdto maptoServicedto(Evententity enqentity) {
        // Implement the mapping logic
        return new Eventdto(
                enqentity.getId(),
                enqentity.getName(),
                enqentity.getImage(),
                enqentity.getRating(),
                enqentity.getPhotographer(),
                enqentity.getPrice()
                
        );
    }

    public static Evententity maptoServiceentity(Eventdto enqdto) {
        // Implement the mapping logic
        return new Evententity(
                enqdto.getId(),
                enqdto.getName(),
                enqdto.getImage(),
                enqdto.getRating(),
                enqdto.getPhotographer(),
                enqdto.getPrice()
            
        );
    }
}

