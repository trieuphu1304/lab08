// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import MovieCard from '../components/MovieCard/MovieCard';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';
import { getPopularMovies, getUpcomingMovies, getNowPlayingMovies } from '../api/tmdb';
import Carousel from '../components/Carousel/Carousel';
import SectionTitle from '../components/SectionTitle/SectionTitle';

const HomePageContainer = styled.div`
    background-color: #0f0f0f; /* Nền tối cho phong cách hiện đại, điện ảnh */
    color: #e0e0e0;
    min-height: 100vh;
`;

const ContentWrapper = styled.div`
    padding: 2rem 3rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const Section = styled.section`
    margin-bottom: 4rem;
`;

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const [popular, upcoming, nowPlaying] = await Promise.all([
                    getPopularMovies(),
                    getUpcomingMovies(),
                    getNowPlayingMovies(),
                ]);
                setPopularMovies(popular.results);
                setUpcomingMovies(upcoming.results);
                setNowPlayingMovies(nowPlaying.results);
            } catch (err) {
                setError("Không thể tải phim. Vui lòng thử lại sau.");
                console.error("Error fetching movies:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) return <HomePageContainer><p>Đang tải phim...</p></HomePageContainer>;
    if (error) return <HomePageContainer><p style={{color: 'red'}}>{error}</p></HomePageContainer>;

    const heroMovie = nowPlayingMovies[0];

    return (
        <HomePageContainer>
            <Header />
            {heroMovie && <HeroSection movie={heroMovie} />}

            <ContentWrapper>
                <Section>
                    <SectionTitle title="Phim Đang Chiếu" />
                    <Carousel movies={nowPlayingMovies} />
                </Section>

                <Section>
                    <SectionTitle title="Phim Phổ Biến" />
                    <Carousel movies={popularMovies} />
                </Section>

                <Section>
                    <SectionTitle title="Phim Sắp Chiếu" />
                    <Carousel movies={upcomingMovies} />
                </Section>
                {/* Thêm các section khác như "Theo thể loại", "Phim được đề xuất"... */}
            </ContentWrapper>
            <Footer />
        </HomePageContainer>
    );
};

export default HomePage;