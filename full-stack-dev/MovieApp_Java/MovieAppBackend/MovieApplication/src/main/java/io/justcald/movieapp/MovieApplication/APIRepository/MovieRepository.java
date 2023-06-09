package io.justcald.movieapp.MovieApplication.APIRepository;

import io.justcald.movieapp.MovieApplication.Entities.Movie;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {

}
