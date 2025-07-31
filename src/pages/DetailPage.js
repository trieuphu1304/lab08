// src/components/MovieCard/MovieCard.jsx
import React from 'react';
import {
    CardContainer,
    Poster,
    Overlay,
    OverlayContent,
    Title,
    Rating,
    DetailButton,
    Year
} from './MovieCard.styled';
import { FaStar } from 'react-icons/fa'; // Cần cài đặt react-icons: npm install react-icons

const MovieCard = ({ movie }) => {
    // Xử lý đường dẫn poster: sử dụng ảnh placeholder nếu không có poster_path
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` // TMDb API standard size
        : 'https://via.placeholder.com/500x750?text=No+Poster'; // Placeholder image

    const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';

    return (
        <CardContainer>
            <Poster src={posterUrl} alt={movie.title} />
            <Overlay>
                <OverlayContent>
                    <Title>{movie.title}</Title>
                    {movie.vote_average > 0 && ( // Chỉ hiển thị rating nếu có
                        <Rating>
                            <FaStar /> {movie.vote_average.toFixed(1)} / 10
                        </Rating>
                    )}
                    <Year>{releaseYear}</Year>
                    <DetailButton href={`/movie/${movie.id}`}>Xem Chi Tiết</DetailButton>
                </OverlayContent>
            </Overlay>
        </CardContainer>
    );
};

export default MovieCard;