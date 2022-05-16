import React from 'react';

export default function SearchForm({ handleSubmit, search, setSearch }) {
  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
