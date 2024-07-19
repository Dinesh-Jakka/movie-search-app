import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 2px solid #cbdcda;
  border-radius: 5px;
  outline: none;
  width:50%;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #000;
  }
`;

const Button = styled.button`
  color: #fff;
  padding: 15px 25px;
  border-radius: 100px;
  background-color: #4C43CD;
  background-image: radial-gradient(93% 87% at 87% 89%, rgba(0, 0, 0, 0.23) 0%, transparent 86.18%), radial-gradient(66% 87% at 26% 20%, rgba(255, 255, 255, 0.41) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 2px 19px 31px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  font-size: 16px;
  border: 0;
  margin-left:10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a movie..."
        required
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
