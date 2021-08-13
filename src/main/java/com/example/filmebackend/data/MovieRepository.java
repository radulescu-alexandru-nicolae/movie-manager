package com.example.filmebackend.data;

import com.example.filmebackend.model.Movie;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository extends CrudRepository<Movie,Long> {
}
