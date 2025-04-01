import React, { useState } from "react";
import "./Staking.css";

const Staking = () => {
  const [stakeAmount, setStakeAmount] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [estimatedRewards, setEstimatedRewards] = useState(null);

  const stakingPlans = [
    { id: "eth", name: "ETH Staking", interestRate: 5, lockPeriod: 30, totalStaked: "1000 ETH" },
    { id: "dai", name: "DAI Staking", interestRate: 4.2, lockPeriod: 60, totalStaked: "500,000 DAI" },
    { id: "btc", name: "BTC Staking", interestRate: 3.8, lockPeriod: 90, totalStaked: "300 BTC" },
  ];

  const handleCalculate = () => {
    if (!stakeAmount || !selectedPlan) return;
    const plan = stakingPlans.find((p) => p.id === selectedPlan);
    if (!plan) return;

    const reward = (stakeAmount * plan.interestRate) / 100;
    setEstimatedRewards(reward.toFixed(2));
  };

  return (
    <div className="staking-container">
      <h2 className="title">Staking & Yield Farming</h2>

      {/* Staking Opportunities */}
      <div className="staking-grid">
        {stakingPlans.map((plan) => (
          <div key={plan.id} className="staking-card">
            <h3>{plan.name}</h3>
            <p>Secure your {plan.name.split(" ")[0]} with competitive rewards.</p>
            <p><strong>Interest Rate:</strong> {plan.interestRate}%</p>
            <p><strong>Lock-in Period:</strong> {plan.lockPeriod} days</p>
            <p><strong>Total Staked:</strong> {plan.totalStaked}</p>
            <button onClick={() => setSelectedPlan(plan.id)}>Select Plan</button>
          </div>
        ))}
      </div>

      {/* Reward Calculator */}
      <div className="reward-calculator">
        <h3>Estimated Rewards</h3>
        {/* <p>Calculate potential earnings based on your stake.</p> */}
        <input
          type="number"
          placeholder="Enter amount"
          value={stakeAmount}
          onChange={(e) => setStakeAmount(e.target.value)}
        />
        <button className="calculate-btn" onClick={handleCalculate}>Calculate</button>

        {estimatedRewards && (
          <p className="reward-result">
            Estimated Rewards: <strong>{estimatedRewards}</strong> {selectedPlan?.toUpperCase()}
          </p>
        )}
      </div>
    </div>
  );
};

export default Staking;
