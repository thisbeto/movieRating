package com.movie_rating.controller;

import com.movie_rating.movie.Movie;
import com.movie_rating.movie.MovieRepository;
import com.movie_rating.movie.MovieRequestDTO;
import com.movie_rating.movie.MovieResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("movie")
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;


    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveMovie(@RequestBody MovieRequestDTO data){
        Movie movieData = new Movie(data);
        movieRepository.save(movieData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<MovieResponseDTO> getAll() {

        List<MovieResponseDTO> movieList = movieRepository.findAll().stream().map(MovieResponseDTO::new).toList();
        return movieList;
    }
}
