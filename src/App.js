import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProfileCreation from './ProfileCreation'; // Ensure this is the correct path to your new component

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [showPizzaImage, setShowPizzaImage] = useState(false);
  const [items, setItems] = useState(['Pizza', 'Burger', 'Pasta', 'spagetti', 'soup']); // Sample items
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setDisplayText(event.target.value);
    setShowPizzaImage(event.target.value.toLowerCase() === 'pizza');

    // Filter items based on search term
    const filtered = items.filter(item => item.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredItems(filtered);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <h1 style={{ textAlign: 'center', color: '#007bff' }}>Search Bar</h1>
        <style jsx>
          {`
            .search-wrapper {
              display: flex;
              justify-content: center;
              margin: 20px auto;
            }

            .search-input {
              display: block;
              width: 100%;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              font-size: 16px;
              box-sizing: border-box;
              background-color: #f5f5f5;
              color: #333;
            }

            .displayed-text {
              text-align: center;
              font-size: 36px;
              color: red;
              margin-top: 10px;
            }

            .pizza-image {
              display: block;
              width: 500px;
              height: auto;
              margin: 10px auto;
            }

            button {
              padding: 10px 20px;
              font-size: 16px;
              color: white;
              background-color: #007bff;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            }

            .filtered-items {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 20px;
            }

            .filtered-item {
              background-color: #f5f5f5;
              border: 1px solid #ccc;
              border-radius: 5px;
              padding: 10px;
              margin-bottom: 10px;
              width: 200px;
              text-align: center;
            }
          `}
        </style>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        <div className="displayed-text">{displayText || ''}</div>
        {showPizzaImage && (
          <img src="https://thumbs.dreamstime.com/b/sketch-smiling-italian-chef-holding-pizza-his-hand-style-vector-illustration-white-background-charming-74048679.jpg" alt="Pizza" className="pizza-image" />
        )}
        <Link to="/create-profile"><button>Create Profile</button></Link>
        <Routes>
          <Route path="/create-profile" element={<ProfileCreation />} />
        </Routes>
        <div className="filtered-items">
          <h2>Current Items</h2>
          {filteredItems.map((item, index) => (
            <div key={index} className="filtered-item">{item}</div>
          ))}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
