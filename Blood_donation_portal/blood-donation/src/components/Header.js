// import React from 'react';
// import { Link } from 'react-router-dom';

// function Header({ toggleTheme, theme }) {
//   return (
//     <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
//       <div className="container-fluid">
//         <Link className="navbar-brand fw-bold text-danger" to="/">
//           🩸 Blood Donation Portal
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">About</Link>
//             </li>
//             {/* You can add dropdowns like 'Events', 'Resources' here */}
//           </ul>
//           <button onClick={toggleTheme} className="btn btn-outline-danger">
//             {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ toggleTheme, theme }) {
  return (
    <header className="bg-danger text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h3 className="m-0">🩸 Blood Donation Portal</h3>
        <nav className="d-flex align-items-center gap-3">
          <Link className="text-white text-decoration-none" to="/">Home</Link>
          <Link className="text-white text-decoration-none" to="/about">About</Link>

          {/* Dropdown for Events */}
          <div className="dropdown">
            <button className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown">
              Events
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Blood Drive</a></li>
              <li><a className="dropdown-item" href="#">Workshops</a></li>
            </ul>
          </div>

          {/* Dropdown for Resources */}
          <div className="dropdown">
            <button className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown">
              Resources
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Eligibility</a></li>
              <li><a className="dropdown-item" href="#">FAQs</a></li>
            </ul>
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="btn btn-outline-light">
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>

          {/* Login/Register */}
          <button className="btn btn-light text-danger">Login</button>
          <button className="btn btn-outline-light">Register</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
