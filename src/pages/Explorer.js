import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import './Explorer.css';

const Explorer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [blockData, setBlockData] = useState(null);
  const [transactionData, setTransactionData] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);

    console.log('Search query:', query);

    if (query === 'block123') {
      setBlockData({
        hash: 'block123',
        miner: 'MinerName',
        size: '2MB',
        time: '2025-01-07 12:30:00',
        transactions: 100,
      });
      setTransactionData(null);
    } else if (query === 'tx456') {
      setTransactionData({
        hash: 'tx456',
        status: 'Completed',
        fee: '0.01 BTC',
        inputs: [{ address: 'address1', amount: '0.5 BTC' }],
        outputs: [{ address: 'address2', amount: '0.49 BTC' }],
      });
      setBlockData(null);
    } else {
      setBlockData(null);
      setTransactionData(null);
    }
  };

  return (
    <div className="explorer-container">
      <h2 className="title">Blockchain Explorer</h2>

      <SearchBar onSearch={handleSearch} />

      {blockData && (
        <div className="block-details">
          <h2 className="block-details-title">Block Details</h2>
          <p><strong>Block Hash:</strong> {blockData.hash}</p>
          <p><strong>Miner:</strong> {blockData.miner}</p>
          <p><strong>Size:</strong> {blockData.size}</p>
          <p><strong>Time:</strong> {blockData.time}</p>
          <p><strong>Transactions:</strong> {blockData.transactions}</p>
        </div>
      )}

      {transactionData && (
        <div className="transaction-details">
          <h2 className="transaction-details-title">Transaction Details</h2>
          <p><strong>Transaction Hash:</strong> {transactionData.hash}</p>
          <p><strong>Status:</strong> {transactionData.status}</p>
          <p><strong>Fee:</strong> {transactionData.fee}</p>
          <div>
            <h3>Inputs</h3>
            {transactionData.inputs.map((input, index) => (
              <p key={index}><strong>Address:</strong> {input.address}, <strong>Amount:</strong> {input.amount}</p>
            ))}
          </div>
          <div>
            <h3>Outputs</h3>
            {transactionData.outputs.map((output, index) => (
              <p key={index}><strong>Address:</strong> {output.address}, <strong>Amount:</strong> {output.amount}</p>
            ))}
          </div>
        </div>
      )}

      {!blockData && !transactionData && searchQuery && (
        <div className="no-data">
          <p>No results found for "{searchQuery}". Please try another query.</p>
        </div>
      )}
    </div>
  );
};

export default Explorer;
