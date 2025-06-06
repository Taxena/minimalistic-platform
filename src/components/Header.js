import React from 'react';
import { Link } from 'react-router-dom';
import logoMin from './/herobanner.png';
import './Header.css';


// const HeaderHero = () => {
//   return (
//     <header className="hero-section">
//       <div className="overlay"></div>
//       <div className="hero-content">
//         <div className="hero-text">
//           <h1>Welcome to Blockchain Platform</h1>
//           <p>Discover, trade, and manage your assets with our tools for blockchain enthusiasts.</p>
//           <div className="button-group">
//             <Link to="/wallet" className="hero-button">
//               GET STARTED
//             </Link>
//             <Link to="/explorer" className="hero-button-secondary">
//               EXPLORE
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

const HeaderHero = () => {
  return (
    <header className="hero-section">
      {/* <div className="overlay"></div> */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to Blockchain Platform</h1>
          <p>Discover, trade, and manage your assets with our tools for blockchain enthusiasts.</p>
          <div className="button-group">
            <Link to="/wallet" className="hero-button">
              GET STARTED
            </Link>
            <Link to="/explorer" className="hero-button-secondary">
              EXPLORE
            </Link>
          </div>
        </div>

      </div>
      <div>
        <img className='banner-image' src={logoMin} alt="Logo" />
      </div>
    </header>
  );
};

export default HeaderHero;
