package io.justcald.movieapp.MovieApplication.APIService;

import io.justcald.movieapp.MovieApplication.APIRepository.ReviewRepository;
import io.justcald.movieapp.MovieApplication.Entities.Movie;
import io.justcald.movieapp.MovieApplication.Entities.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String imdbId) {
        // Find the move by imdbId
        Review review = reviewRepository.insert(new Review(reviewBody));

        // Adding the review to the Movies collection for the document with the matching ImdbId
        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;
    }
}
