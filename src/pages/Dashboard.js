import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import StatsCard from '../components/StatsCard';
import './Dashboard.css';
import HeaderHero from '../components/Header';
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { LuBlocks } from "react-icons/lu";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbMoneybag } from "react-icons/tb";


const Dashboard = () => {
  const [stats, setStats] = useState({
    transactionsPerSecond: '1,234 TPS',
    totalValueLocked: '$1,000,000,000',
    activeUsers: '500,000',
  });

  const [news, setNews] = useState([
    { id: 1, title: 'New blockchain upgrade coming soon', date: '2025-01-07' },
    { id: 2, title: 'Ethereum network congestion reduced by 50%', date: '2025-01-05' },
  ]);

  return (
    <div className="dashboard-container">
      <HeaderHero />
      <div className="dashboard-container-inner">
        {/* <h1 className="dashboard-title">Welcome to Your Blockchain Dashboard</h1> */}

        <div className="dashboard-stats">
          <StatsCard
            icon={<FaLock className='icon-inner' />}
            title="Total value locked"
            value="$4.2B"
          />
          <StatsCard
            icon={<FaUser className='icon-inner' />}
            title="Active Users"
            value="2.1M"
          />
          <StatsCard
            icon={<FaCheckCircle className='icon-inner' />}
            title="Validators"
            value="12.5K"
          />
          <StatsCard
            icon={<FaClock className='icon-inner' />}
            title="Avg Block Time"
            value="850ms"
          />
        </div>

        <div className="recent-blocks">
          <div className="block-top">
            <h2 className="dashboard-title">Recent Blocks</h2>
            <button className="more-button">
              <Link to="/staking" className="more-button-link">
                VIEW MORE
              </Link>
            </button>
          </div>

          <div className="block-list">
            {[
              { id: "#1234567", time: "1 min ago" },
              { id: "#1234566", time: "2 mins ago" },
              { id: "#1234567", time: "5 mins ago" },
              { id: "#1234566", time: "7 mins ago" },
            ].map((block, index) => (
              <div key={index} className="block-item">
                <span><LuBlocks /> Block {block.id}</span>
                <span className="block-time">{block.time}</span>
              </div>
            ))}
          </div>


        </div>

        <div className="featured-nfts">
          <div className="block-top">
            <h2 className="dashboard-title">Featured NFTs</h2>
            <button className="more-button">
              <Link to="/staking" className="more-button-link">
                VIEW MORE
              </Link>
            </button>
          </div>
          <div className="nft-grid">
            {[
              { title: "Crypto Art #123", price: "0.5 ETH" },
              { title: "Crypto Art #124", price: "0.8 ETH" },
              { title: "Crypto Art #125", price: "1.2 ETH" },
              { title: "Crypto Art #126", price: "2.0 ETH" },
            ].map((nft, index) => (
              <div key={index} className="nft-card">
                <div className="nft-preview">NFT Preview</div>
                <h3 className="nft-title">{nft.title}</h3>
                <p className="nft-price">{nft.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="news-section">
          <div className="block-top">
            <h2 className="dashboard-title">Blockchain News & Updates</h2>
            <button className="more-button">
              <Link to="/staking" className="more-button-link">
                VIEW MORE
              </Link>
            </button>
          </div>
          <div className="news-list">
            {[
              { title: "Ethereum's Shanghai Upgrade Nears Completion", date: "2025-01-14" },
              { title: "Bitcoin Hits New All-Time High", date: "2025-01-13" },
              { title: "DeFi Protocol XYZ Reports $10M Hack", date: "2025-01-12" },
              { title: "Layer-2 Solutions Gain Traction", date: "2025-01-11" },
              { title: "NFT Marketplace Launches Major Update", date: "2025-01-10" },

            ].map((news, index) => (
              <div key={index} className="news-item">
                <div className="news-date">{news.date}</div>
                <div className="news-content">{news.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="quick-links-section">
          <h2 className="dashboard-title">Quick Links</h2>
          <div className="quick-links-grid">
            {[
              { title: "DevTools", icon: <MdOutlineAnalytics />, link: "/developer-tools" },
              { title: "Support", icon: <IoIosSearch />, link: "/support" },
              { title: "Marketplace", icon: <TbWorld />, link: "/marketplace" },
              { title: "Community", icon: <HiOutlineUserGroup />, link: "/governance" },
              { title: "Staking", icon: <TbMoneybag />, link: "/staking" },
            ].map((link, index) => (
              <a key={index} href={link.link} className="quick-link-card">
                <div className="quick-link-icon">{link.icon}</div>
                <div className="quick-link-title">{link.title}</div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>

  );
};

export default Dashboard;
