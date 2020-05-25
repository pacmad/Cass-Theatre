import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  @media (max-width: 949px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 950px) {
    flex-direction: row;
  }
  display: flex;
  align-items: center;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.27);
  padding: 10px 20px;
  .title {
    @media (min-width: 950px) {
      flex: 1;
      padding: 2.5px 5px;
    }
    font-size: 2.05em;
    font-weight: 300;
    .link {
      text-decoration: none;
      color: inherit;
    }
  }
  .copyright {
    @media (max-width: 949px) {
      font-size: 0.985em;
      padding: 10px 20px;
    }
    @media (min-width: 950px) {
      font-size: 1.2em;
      padding: 2.5px 5px;
      text-align: right;
    }
  }
`

const Footer = () => (
  <FooterStyles>
    <h1 className="title">
      <a href="/" className="link">
        Cass Theatre
      </a>
    </h1>
    <small className="copyright">
      &copy; Cass Theatre {new Date().getFullYear()}
    </small>
  </FooterStyles>
)

export default Footer
