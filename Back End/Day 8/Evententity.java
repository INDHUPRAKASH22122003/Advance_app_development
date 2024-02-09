package com.birthday.birthday.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "addevents")
public class Evententity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Event Name",nullable = false)
    private String name;

    @Column(name = "Image Url",nullable = false)
    private String image;

    @Column(name = "Rating",nullable = false)
    private int rating;
    
    @Column(name = "Photographer Status",nullable = false)
    private String photographer;
    
    @Column(name = "Total Price",nullable = false)
    private int price;
}
