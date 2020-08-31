import React, { useState, createContext } from 'react'

export const MovieContext = createContext();

export default function MovieContextProvider({ children }) {
  const [movies, setMovies] = useState([
    { name: 'Harry Potter', price: 10 },
    { name: 'Game of Thrones', price: 20 },
    { name: 'Inception', price: 15 }
  ]);

  const addMovie = (newMovie) => {
    setMovies(movies.concat(newMovie));
  }

  return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {children}
    </MovieContext.Provider>
  )
}
