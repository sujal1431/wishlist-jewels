package com.jewelry.jewelryshop.repository;

import com.jewelry.jewelryshop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // Case-insensitive search by category
    List<Product> findByCategoryIgnoreCase(String category);
}
