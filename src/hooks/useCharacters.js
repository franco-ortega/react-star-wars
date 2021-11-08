import { useEffect, useState } from 'react';
import { searchCharacters } from '../services/searchCharacters';

export const useCharacters = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState({
    count: 0,
    characters: []
  });

  useEffect(() => {
    setLoading(true);
    searchCharacters(currentPage, searchTerm)
      .then(res => {
        setCharacters(res);
        setLoading(false);
      });
  }, [currentPage, searchTerm]);

  return {
    loading,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    characters
  };

};
