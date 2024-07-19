import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

const App = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <h1>Movie Search</h1>
        <SearchBar onSearch={handleSearch} />
        <MovieList query={query} />
      </div>
    </ThemeProvider>
  );
};

export default App;
