package io.justcald.movieapp.MovieApplication.APIRepository;

import io.justcald.movieapp.MovieApplication.Entities.Movie;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
    // Performing a dynamic query from object property names (as long as they are unique!)
    Optional<Movie> findMovieByImdbId(String imdbId);
}
