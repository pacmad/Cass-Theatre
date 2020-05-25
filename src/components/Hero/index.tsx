import React from 'react'
import styled from 'styled-components'

type HeroStylesProps = {
  type: string
}

const HeroStyles = styled.div<HeroStylesProps>`
  @media (max-width: 949px) {
    margin: ${props => (props.type === 'details' ? '25px auto' : '30px auto')};
    width: 95%;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
  @media (min-width: 950px) {
    height: 100vh;
    &:nth-child(1n) {
      .content {
        flex-direction: row-reverse;
        .pictureSection {
          svg {
            clip-path: polygon(0 0, 70% 0, 100% 100%, 0 100%);
          }
        }
      }
    }
    &:nth-child(2n) {
      .content {
        flex-direction: row;
        .pictureSection {
          svg {
            clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
          }
        }
      }
    }
  }

  background-color: white;
  .content {
    @media (max-width: 949px) {
      border-radius: 5px;
      width: 95%;
      margin: 0 auto;
      padding: 10px 0px;
    }
    @media (min-width: 950px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
    }
    .section {
      &--title {
        @media (max-width: 949px) {
          font-size: 2.05em;
        }
        @media (min-width: 950px) {
          font-size: 4em;
          margin: 0 20px;
        }
        font-weight: 500;
        line-height: 170%;
      }
      &--detail {
        @media (max-width: 949px) {
          font-size: 1.65em;
        }
        @media (min-width: 950px) {
          font-size: 2.05em;
        }
        font-weight: 400;
        line-height: 170%;
      }
    }
    .titleSection {
      @media (max-width: 949px) {
        padding: 10px 20px;
      }
      @media (min-width: 950px) {
        justify-content: center;
        width: 50%;
      }
      height: 100%;
      text-align: center;
      align-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .pictureSection {
      @media (max-width: 949px) {
        margin: 0 auto;
        width: 100%;
      }
      @media (min-width: 950px) {
        width: 50%;
      }
      height: 100%;
      svg,
      img {
        border-radius: 5px;
        height: 100%;
        width: 100%;
      }
    }
  }
`

type HeroProps = {
  title: string
  description?: string
  details?: string[]
  type: string
  image?: string
  children?: React.ReactNode
}

const Hero = (props: HeroProps) => (
  <HeroStyles type={props.type}>
    <div className="content">
      <section className="section titleSection">
        <h1 className="section--title">{props.title}</h1>
        {props.type === 'details' ? (
          <>
            {props?.details?.map((item: string) => (
              <h2 key={item} className="section--detail">
                {item}
              </h2>
            ))}
          </>
        ) : (
          <h2 className="section--detail">{props.description}</h2>
        )}
      </section>
      <section className="section pictureSection">
        {props.type === 'movie' ? (
          <>
            {props.image && (
              <img src={props.image} className="section--image" alt="Movie" />
            )}
          </>
        ) : (
          props.children
        )}
      </section>
    </div>
  </HeroStyles>
)

export default Hero
