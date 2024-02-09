package com.birthday.birthday.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.birthday.entity.Addonentity;

@Repository
public interface Addonrepo extends JpaRepository<Addonentity, Long> {
    Addonentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
    
}