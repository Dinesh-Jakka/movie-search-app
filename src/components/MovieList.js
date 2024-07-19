import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import { ThreeDots } from 'react-loader-spinner'
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const NoDataMessage = styled.div`
  font-size: 18px;
  color: #555;
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  justify-content: center;
`;

const LoaderContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const MovieList = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (query) {
      setSearched(true);
      const fetchMovies = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
          setMovies(response.data.docs);
          setError(null);
        } catch (err) {
          setError('Failed to fetch data');
        }
        setLoading(false);
      };
      fetchMovies();
    } else {
      setSearched(false);
    }
  }, [query]);

  if (loading) return <LoaderContainer>
    <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </LoaderContainer>

  if (error) return <p>{error}</p>;

  return (
    <List>
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      ) : (
        searched && <NoDataMessage>No movies found for the search.
          <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not-found"
      className="not-found-img"
    />
        </NoDataMessage>
      )}
    </List>
  );
};

export default MovieList;
