package com.birthday.birthday.mapper;


import com.birthday.birthday.dto.Bookdto;
import com.birthday.birthday.entity.Bookentity;
public class Bookmapper {

    public static Bookdto maptoServicedto(Bookentity enqentity) {
        // Implement the mapping logic
        return new Bookdto(
                enqentity.getId(),
                enqentity.getEname(),
                enqentity.getName(),
                enqentity.getMobile(),
                enqentity.getEmail(),
                enqentity.getAge(),
                enqentity.getAddress(),
                enqentity.getDate(),
                enqentity.getTime(),
                enqentity.getNoofpeople(),
                enqentity.getVeg(),
                enqentity.getNonveg(),
                enqentity.getFood(),
                enqentity.getAddons()
                
        );
    }

    public static Bookentity maptoServiceentity(Bookdto enqdto) {
        // Implement the mapping logic
        return new Bookentity(
            enqdto.getId(),
            enqdto.getEname(),
            enqdto.getName(),
            enqdto.getMobile(),
            enqdto.getEmail(),
            enqdto.getAge(),
            enqdto.getAddress(),
            enqdto.getDate(),
            enqdto.getTime(),
            enqdto.getNoofpeople(),
            enqdto.getVeg(),
            enqdto.getNonveg(),
            enqdto.getFood(),
            enqdto.getAddons()
        );
    }
}

