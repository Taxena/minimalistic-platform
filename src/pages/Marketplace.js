

import React, { useState } from "react";
import "./Marketplace.css";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");

  const items = [
    { id: 1, name: "NFT Alpha", info: "Limited Edition", category: "NFT", price: "1.2 ETH" },
    { id: 2, name: "DeFi Token", info: "Utility Coin", category: "Token", price: "0.8 ETH" },
    { id: 3, name: "Art Piece", info: "Rare Collection", category: "NFT", price: "2.5 ETH" },
    { id: 4, name: "Membership Pass", info: "Exclusive Access", category: "Pass", price: "0.5 ETH" },
    { id: 5, name: "Gaming Item", info: "Digital Asset", category: "Gaming", price: "3.0 ETH" },
    { id: 6, name: "NFT Alpha", info: "Limited Edition", category: "NFT", price: "1.2 ETH" },
    { id: 7, name: "DeFi Token", info: "Utility Coin", category: "Token", price: "0.8 ETH" },
    { id: 8, name: "Art Piece", info: "Rare Collection", category: "NFT", price: "2.5 ETH" },
    { id: 9, name: "Membership Pass", info: "Exclusive Access", category: "Pass", price: "0.5 ETH" },
    { id: 10, name: "Gaming Item", info: "Digital Asset", category: "Gaming", price: "3.0 ETH" },
    { id: 11, name: "NFT Alpha", info: "Limited Edition", category: "NFT", price: "1.2 ETH" },
    { id: 12, name: "DeFi Token", info: "Utility Coin", category: "Token", price: "0.8 ETH" },
  ];

  const filteredItems = items
    .filter(item => category === "All" || item.category === category)
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleBuyClick = (item) => {
    alert(`You have purchased ${item.name} for ${item.price}!`);
  };

  return (
    <div className="marketplace-container">
      <h1>MARKETPLACE</h1>

      <div className="marketplace-controls">
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="NFT">NFTs</option>
          <option value="Token">Tokens</option>
          <option value="Pass">Passes</option>
          <option value="Gaming">Gaming Items</option>
        </select>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="Latest">Latest</option>
          <option value="Price High">Price: High to Low</option>
          <option value="Price Low">Price: Low to High</option>
        </select>
      </div>

      <div className="marketplace-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item.id} className="marketplace-item">
              <h3>{item.name}</h3>
              <p>{item.info}</p>
              <p>{item.price}</p>
              <button className="buy-button" onClick={() => handleBuyClick(item)}>
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
