import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {

  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    username: "User123",
    email: "user123@example.com",
    walletAddress: "0x1234567890abcdef1234567890abcdef12345678",
    joined: "2022-05-15",
    lastLogin: "2025-02-04 14:35",
    verified: true,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [activityHistory] = useState([
    { date: "2025-01-01", action: "Staked 10 ETH" },
    { date: "2025-01-03", action: "Transferred 5 ETH to Wallet X" },
    { date: "2025-01-10", action: "Updated Security Settings" },
  ]);

  const [security] = useState({
    twoFA: true,
    apiKey: "xxxxxxxxxxxxxxx",
  });

  return (
    <div className="profile-container">
      <h2 className="title">Account Settings</h2>

      {/* Profile Details */}
      <section className="profile-section">
        {/* <h3>Profile Details</h3> */}
        <div className="profile-card">
          {editing ? (
            <div className="edit-mode">
              <label>Username:</label>
              <input type="text" name="username" value={user.username} onChange={handleChange} />

              <label>Email:</label>
              <input type="email" name="email" value={user.email} onChange={handleChange} />

              <label>Wallet Address:</label>
              <input type="text" name="walletAddress" value={user.walletAddress} disabled />

              <button className="save-btn" onClick={() => setEditing(false)}>Save</button>
              <button className="cancel-btn" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          ) : (
            <div className="profile-info">
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Wallet Address:</strong> <span className="wallet-address">{user.walletAddress}</span></p>
              <p><strong>Joined:</strong> {user.joined}</p>
              <p><strong>Last Login:</strong> {user.lastLogin}</p>
              <p><strong>Verification:</strong> {user.verified ? "✅ Verified" : "❌ Not Verified"}</p>
              <button className="edit-btn" onClick={() => setEditing(true)}>Edit Profile</button>
            </div>
          )}
        </div>
      </section>

      {/* Activity History */}
      <section className="activity-section">
        <h3>Activity History</h3>
        <table className="activity-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {activityHistory.map((activity, index) => (
              <tr key={index}>
                <td>{activity.date}</td>
                <td>{activity.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Security Settings */}
      <section className="security-section">
        <h3>Security Settings</h3>
        <div className="security-card">
          <p><strong>2FA:</strong> {security.twoFA ? "Enabled ✅" : "Disabled ❌"}</p>
          <p><strong>API Key:</strong> {security.apiKey}</p>
          <button className="security-btn">Change 2FA</button>
        </div>
      </section>
    </div>
  );
};

export default Profile;
