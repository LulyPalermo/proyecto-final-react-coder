import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() !== "") {
      navigate(`/search/${query}`);
      setQuery(""); // limpio input después de buscar
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input type="text" placeholder="Buscar" value={query} onChange={(e) => setQuery(e.target.value)}/>
      <button type="submit"><CiSearch /></button>
    </form>
  );
};
