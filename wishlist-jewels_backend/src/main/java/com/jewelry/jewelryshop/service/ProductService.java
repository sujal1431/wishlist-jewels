package com.jewelry.jewelryshop.service;

import com.jewelry.jewelryshop.model.Product;
import com.jewelry.jewelryshop.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> getAll() {
        return repo.findAll();
    }

    public Product getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public List<Product> getByCategory(String category) {
        return repo.findByCategoryIgnoreCase(category);
    }

    public Product save(Product product) {
        return repo.save(product);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
