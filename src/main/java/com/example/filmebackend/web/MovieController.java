package com.example.filmebackend.web;

import com.example.filmebackend.data.MovieRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class MovieController {
    public MovieRepository movies;
    public MovieController(MovieRepository movies) {
        this.movies = movies;
    }
    @GetMapping("/")
    public String home(Model model){
        model.addAttribute("lista",movies.findAll());
        return "layout";
    }
}
