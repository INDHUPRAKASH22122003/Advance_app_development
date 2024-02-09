package com.birthday.birthday.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Eventdto {
    private Long id;
    private String name;
    private String image;
    private int rating;
    private String photographer;
    private int price;

}


