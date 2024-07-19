import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  display: inline-block;
  width: 200px;
  height: 300px;
  text-align: center;
  overflow:hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
  }

  h3 {
    font-size: 18px;
    margin: 10px 0;
  }

  p {
    margin: 5px 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const MovieCard = ({ movie }) => {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        setDogImage(response.data.message);
      } catch (err) {
        console.error('Failed to fetch dog image');
      }
    };
    fetchDogImage();
  }, []);

  return (
    <Card>
      <img src={dogImage} alt="Random Dog" />
      <h3>{movie.title}</h3>
      <p>{movie.author_name?.join(', ')}</p>
      <p>{movie.first_publish_year}</p>
    </Card>
  );
};

export default MovieCard;
