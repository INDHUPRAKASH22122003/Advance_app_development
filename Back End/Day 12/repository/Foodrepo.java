package com.birthday.birthday.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.birthday.entity.Foodentity;

@Repository
public interface Foodrepo extends JpaRepository<Foodentity, Long> {
    Foodentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
    
}
