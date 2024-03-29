package com.birthday.birthday.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.birthday.birthday.entity.Evententity;

@Repository

public interface Eventrepo extends JpaRepository<Evententity, Long> {
    Evententity findByName(String name);
    void deleteByName(String name);
    // Other methods...
    
}
