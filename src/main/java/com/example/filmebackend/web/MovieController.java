package com.example.filmebackend.web;

import com.example.filmebackend.data.MovieRepository;
import com.example.filmebackend.model.Movie;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.io.IOException;
import java.util.Optional;

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
    public String newMovie(Model model ){
        model.addAttribute("movie",new Movie());


        return "addMovie";
    }
    @PostMapping("movies/new" )
    public String newMovie(@Valid Movie movie ,@RequestParam("image")MultipartFile multipart) throws IOException {

        movie.setContent(multipart.getBytes());
        movies.save(movie);

        return "redirect:/";
    }
    @GetMapping("/movies/{id}")
    public String moviesDetails(@PathVariable("id") Long id,Model model){
        model.addAttribute("movie",movies.findById(id));
        return "updateMovie";
    }




    @PostMapping("/movies/{id}")
        public String updateMovie( @RequestParam("fileupload")MultipartFile multipart,@PathVariable Long id,@Valid Movie movie) throws IOException {


        Movie movie1=movies.findById(id).get();
        movie1.setContent(multipart.getBytes());
        System.out.println(multipart.getBytes());
//        movie1.setCast(movie.getCast());
//        movie1.setTitle(movie.getTitle());
//        movie1.setDescriere(movie.getDescriere());
//        movie1.setDuration_min(movie.getDuration_min());
       movies.save(movie1);
        return "redirect:/";




    }
    @PostMapping("/movies/{id}/delete")
    public String movieDelete(@PathVariable Long id){
        movies.deleteById(id);
        return "redirect:/";
    }
}

