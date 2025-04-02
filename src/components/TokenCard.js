import React from 'react';
import './TokenCard.css';

const TokenCard = ({ name, symbol, value, logo, description }) => {
  const handleBuyClick = (e) => {
    e.stopPropagation();
    alert(`You have purchased ${name} for ${value}!`);
  };
  return (
    <div className="token-card">
      <div className="token-card-header">
        {/* <img src={logo} alt={`${name} logo`} className="token-card-logo" /> */}
        <div className="token-card-title">
          <h3 className="token-card-name">Example Name</h3>
          <p className="token-card-symbol">Info</p>
        </div>
      </div>
      <div className="token-card-body">
        <p className="token-card-value">{value}</p>
        {description && <p className="token-card-description">{description}</p>}
      </div>
      <button className="buy-button" onClick={handleBuyClick}>Buy Now</button>
    </div>
  );
};

export default TokenCard;
