import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBox.module.css';

export const SearchBox = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/SearchList?title=${search}`);
      setSearch('');
    }
  };

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Buscar..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};
