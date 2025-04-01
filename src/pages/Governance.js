import React, { useState, useEffect } from 'react';
import './Governance.css';


const Governance = () => {
  const [proposals, setProposals] = useState([
    {
      id: 1,
      title: "Upgrade Network Speed",
      description: "Should we invest in better infrastructure for faster transactions?",
      status: "Open",
      votesFor: 1500,
      votesAgainst: 200,
      comments: [],
    },
    {
      id: 2,
      title: "Add New Staking Rewards",
      description: "Should we introduce additional rewards for staking?",
      status: "Closed",
      votesFor: 1200,
      votesAgainst: 300,
      comments: [],
    },
  ]);

  const [commentText, setCommentText] = useState("");

  const handleVote = (id, type) => {
    setProposals((prevProposals) =>
      prevProposals.map((proposal) =>
        proposal.id === id
          ? {
            ...proposal,
            votesFor: type === "for" ? proposal.votesFor + 1 : proposal.votesFor,
            votesAgainst: type === "against" ? proposal.votesAgainst + 1 : proposal.votesAgainst,
          }
          : proposal
      )
    );
  };

  const handleAddComment = (id) => {
    if (!commentText.trim()) return;
    setProposals((prevProposals) =>
      prevProposals.map((proposal) =>
        proposal.id === id
          ? { ...proposal, comments: [...proposal.comments, commentText] }
          : proposal
      )
    );
    setCommentText("");
  };

  return (
    <div className="community-container">
      <h2 className="title">Community</h2>
      <section className="proposals">
        {proposals.map((proposal) => (
          <div key={proposal.id} className="proposal-card">
            <h4>{proposal.title}</h4>
            <p>{proposal.description}</p>
            <p><strong>Status:</strong> {proposal.status}</p>
            <div className="vote-section">
              <button onClick={() => handleVote(proposal.id, "for")} className="vote-button">👍 {proposal.votesFor}</button>
              <button onClick={() => handleVote(proposal.id, "against")} className="vote-button">👎 {proposal.votesAgainst}</button>
            </div>
            <div className="comments-section">
              <input
                type="text"
                placeholder="Add a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button onClick={() => handleAddComment(proposal.id)} className="comment-button">Post</button>
              <div className="comments-list">
                {proposal.comments.map((comment, index) => (
                  <p key={index} className="comment">{comment}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="community-engagement">
        <h3>Community Engagement</h3>
        <div className="engagement-buttons">
          <button className="engage-button">📜 Roadmap Updates</button>
          <button className="engage-button">💬 Community Forum</button>
          <button className="engage-button">⚖️ Participate in DAO</button>
        </div>
      </section>
    </div>
  );


};

export default Governance;
