import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="col">
          <h2>Insurance & Loan</h2>
          <ul>
            <li><Link>Credit Card</Link></li>
            <li><Link>Personal Loan</Link></li>
            <li><Link>vehicle Loan</Link></li>
            <li><Link>Gold Loan</Link></li>
            <li><Link>Other Loan</Link></li>
          </ul>
        </div>
        <div className="col">
          <h2>Resources</h2>
          <ul>
            <li><Link>Apply Now</Link></li>
          </ul>
        </div>
        <div className="col">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/creadit-detail">Contact </Link></li>
          </ul>
        </div>
        <div className="col">
          <h2>Follow us on</h2>
          <ul>
          <li><Link>Facebook</Link></li>
          <li><Link>Instagram</Link></li>
          <li><Link>Linkdin</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
