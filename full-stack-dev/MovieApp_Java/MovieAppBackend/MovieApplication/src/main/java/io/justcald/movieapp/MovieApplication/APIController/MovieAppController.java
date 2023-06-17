package io.justcald.movieapp.MovieApplication.APIController;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieAppController {

    @GetMapping
    public ResponseEntity<String> allMovies() {
        return new ResponseEntity<String>("\"All Movies!\"", HttpStatus.OK);
    }

}
