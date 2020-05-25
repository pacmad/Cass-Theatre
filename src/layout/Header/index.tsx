import React from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.header`
  position: sticky;
  top: 0;
  padding: 10px 20px;
  border-bottom: 1.5px solid hsla(0, 0%, 50.2%, 0.253);
  background-color: white;
  z-index: 100000;
  .title {
    text-align: center;
    font-weight: 300;
    font-size: 2.05em;
    transition: all 0.35s;
    &:hover {
      letter-spacing: 0.15em;
    }
    .link {
      text-decoration: none;
      color: inherit;
    }
  }
`

const Header = () => (
  <HeaderStyles className="header">
    <h1 className="title">
      <a href="/" className="link">
        Cass Theatre
      </a>
    </h1>
  </HeaderStyles>
)

export default Header
