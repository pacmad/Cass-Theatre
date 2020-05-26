import React from 'react'
import './styles.scss'

const Footer = () => (
  <footer className="footer">
    <h1 className="title">
      <a href="/" className="link">
        Cass Theatre
      </a>
    </h1>
    <small className="copyright">
      &copy; Cass Theatre {new Date().getFullYear()}
    </small>
  </footer>
)

export default Footer
