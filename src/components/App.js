import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  const [filter, setFilter] = useState("")


  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(listingsData => setListings(listingsData))
  }, [])

  function handleDeleteEvent(id) {
    const updatedListings = listings.filter(listing => listing.id !== id)
    setListings(updatedListings)
  }

  const filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="app">
      <Header handleFilter={setFilter} filter={filter} />
      <ListingsContainer 
        onDelete={handleDeleteEvent} 
        listings={filteredListings}
      />
    </div>
  );
}

export default App;
