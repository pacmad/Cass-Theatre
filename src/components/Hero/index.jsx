import React from 'react'
import './styles.scss'

const Hero = props => (
  <div className={`hero hero--${props.type}`}>
    <div className="content">
      <section className="section titleSection">
        <h1 className="section--title">{props.title}</h1>
        {props.type === 'details' ? (
          <>
            {props.details.map(item => (
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
  </div>
)

export default Hero
