package com.example.filmebackend.web;

import com.example.filmebackend.data.MovieRepository;
import com.example.filmebackend.model.Movie;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
public class MovieController {
    public MovieRepository movies;
    public MovieController(MovieRepository movies) {
        this.movies = movies;
    }
    @GetMapping("/")
    public String home(Model model){
        model.addAttribute("lista",movies.findAll());
        return "layoutFinal";
    }
    @GetMapping("/movies/new")
    public String newMovie(Model model){
        model.addAttribute("movie",new Movie());
        return "addMovie";
    }
    @PostMapping("movies/new")
    public String newMovie(@Valid Movie movie){
        movies.save(movie);
        return "redirect:/";
    }
    @GetMapping("/movies")
    public String moviesDetails(@Param("id") Long id,Model model){
        model.addAttribute("movie",movies.findById(id));
        return "updateMovie";
    }
    @PostMapping("/movies/{id}")
    public String updateBook(@PathVariable Long id,@Valid Movie movie,Model model){
        movies.save(movie);
        return "redirect:/";
    }
    @PostMapping("/movies/{id}/delete")
    public String movieDelete(@PathVariable Long id){
        movies.deleteById(id);
        return "redirect:/";
    }
}

