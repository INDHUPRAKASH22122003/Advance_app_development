package com.security.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.security.entity.Bookentity;

@Repository
public interface Bookrepo extends JpaRepository<Bookentity, Long> {
    Bookentity findById(long id);
    void deleteById(long id);
    // Other methods...
    
}