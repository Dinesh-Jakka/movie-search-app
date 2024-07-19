# Movie Search App

A React application that allows users to search for movies using the Open Library Search API. The results are displayed as cards, each with a random dog image fetched from the Dog API. The application features responsive design and dynamic styling with `styled-components`.

## Live Link : https://movie-search-app-hodo.onrender.com

## Features

- **Search Bar**: Allows users to enter a movie name and search for relevant results.
- **Movie Cards**: Displays movie details in a card format with a random dog image.
- **Responsive Design**: Adjusts layout and styling based on screen size.
- **Styled Components**: Uses `styled-components` for modern and modular styling.

## Components

### SearchBar

- **Purpose**: Allows users to enter a movie name and trigger the search.
- **Features**:
  - Input field for movie name.
  - Submit button to initiate the search.
  - Styled with modern and responsive design.

### MovieList

- **Purpose**: Displays a list of movie cards based on the search results.
- **Features**:
  - Fetches and displays movie data.
  - Handles loading and error states.
  - Conditionally shows a message when no movies are found after a search.

### MovieCard

- **Purpose**: Renders individual movie details along with a random dog image.
- **Features**:
  - Displays movie title, author(s), and first publication year.
  - Shows a random dog image fetched from the Dog API.
  - Includes hover effects and responsive design.

## API Endpoints

- **Open Library Search API**: 
  - **Endpoint**: `https://openlibrary.org/search.json?q={query}`
  - **Description**: Used to search for movies by appending the movie name to the query parameter.

- **Dog API**: 
  - **Endpoint**: `https://dog.ceo/api/breeds/image/random`
  - **Description**: Provides a random dog image to be displayed in movie cards.


## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **styled-components**: Library for styling React components.
- **Axios**: Promise-based HTTP client for making API requests.
- **Open Library Search API**: API for fetching movie data.
- **Dog API**: API for fetching random dog images.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/movie-search-app.git
2. **Navigate into the project directory**:
   ```bash
   cd movie-search-app
3. **Install dependencies**:
    ```bash
    npm install
## Usage

1. **Start the development server**:
    ```bash
    npm start
2. **Open your browser and go to http://localhost:3000 to view the application** .
