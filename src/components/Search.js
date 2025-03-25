
import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="container mt-4">
      <form className="d-flex align-items-center" onSubmit={handleSearch}>
      <i className="bi bi-search"></i> 
<button
  className="btn btn-primary search-button ms-2"
  type="submit"
>
  iSERVICE
</button>
      </form>
    </div>
  );
}
