package com.movie_rating.movie;

public record MovieResponseDTO(Long id, String title, String image, String rating) {
    public MovieResponseDTO(Movie movie) {
        this(movie.getId(), movie.getTitle(), movie.getImage(), movie.getRating());
    }
}
