import React, { useState } from "react";
import "./Wallet.css";

const Wallet = () => {
  const [balance] = useState(12000);
  const [tokens] = useState([
    { symbol: "BTC", name: "Bitcoin", holdings: 0.8, price: 42000 },
    { symbol: "ETH", name: "Ethereum", holdings: 5.2, price: 3200 },
    { symbol: "SOL", name: "Solana", holdings: 15, price: 95 },
    { symbol: "ADA", name: "Cardano", holdings: 500, price: 0.65 },
  ]);
  const [transactions] = useState([
    { date: "2025-02-01", type: "Sent", amount: "-0.2 BTC", status: "Completed" },
    { date: "2025-01-30", type: "Received", amount: "+1.5 ETH", status: "Completed" },
    { date: "2025-01-28", type: "Sent", amount: "-5 SOL", status: "Pending" },
  ]);

  return (
    <div className="wallet-container">
      <h2 className="title">Wallet Management</h2>

      <div className="balance-section">
        <p className="balance-label">Total Balance</p>
        <p className="balance-value">${balance.toLocaleString()}</p>
      </div>

      <section className="tokens-section">
        <h3>Your Tokens</h3>
        <div className="tokens-grid">
          {tokens.map((token, index) => (
            <div key={index} className="token-card">
              <div className="token-info">
                <img src={`/icons/${token.symbol.toLowerCase()}.png`} alt={token.symbol} className="token-icon" />
                <div className="token-text">
                  <h4>{token.symbol} ({token.name})</h4>
                  <p>Holdings: <strong>{token.holdings}</strong></p>
                  <p>Price: ${token.price.toLocaleString()}</p>
                  <p>Value: <strong>${(token.holdings * token.price).toLocaleString()}</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="transactions-section">
        <h3>Transaction History</h3>
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.date}</td>
                <td>{tx.type}</td>
                <td>{tx.amount}</td>
                <td className={tx.status === "Completed" ? "status-completed" : "status-pending"}>{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="wallet-buttons">
          <button className="wallet-action send">Send</button>
          <button className="wallet-action receive">Receive</button>
        </div>
      </section>


    </div>
  );
};

export default Wallet;
