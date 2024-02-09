package com.birthday.birthday.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.birthday.birthday.entity.Bookentity;

@Repository
public interface Bookrepo extends JpaRepository<Bookentity, Long> {
    Bookentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
    
}
