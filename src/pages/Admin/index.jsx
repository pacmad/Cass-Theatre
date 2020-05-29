import React from 'react'
import './styles.scss'
import { db, auth } from '../../db/functions'

const Admin = () => {
  let [nowPlayingMovie, setNowPlayingMovie] = React.useState('')
  let [nowPlayingDescription, setNowPlayingDescription] = React.useState('')
  let [nowPlayingPicture, setNowPlayingPicture] = React.useState('')

  let [startingMovie, setStartingMovie] = React.useState('')
  let [startingDescription, setStartingDescription] = React.useState('')
  let [startingPicture, setStartingPicture] = React.useState('')

  let [comingSoonMovie, setComingSoonMovie] = React.useState('')
  let [comingSoonDescription, setComingSoonDescription] = React.useState('')
  let [comingSoonPicture, setComingSoonPicture] = React.useState('')

  const fieldsets = [
    {
      title: 'Now Playing',

      movieId: 'nowPlayingMovie',
      movieValue: nowPlayingMovie,
      movieHandleChange: e => {
        setNowPlayingMovie(e.target.value)
      },

      descriptionId: 'nowPlayingDescription',
      descriptionValue: nowPlayingDescription,
      descriptionHandleChange: e => {
        setNowPlayingDescription(e.target.value)
      },

      pictureId: 'nowPlayingPicture',
      pictureValue: nowPlayingPicture,
      pictureHandleChange: e => {
        setNowPlayingPicture(e.target.value)
      }
    },

    {
      title: 'Starting',

      movieId: 'startingMovie',
      movieValue: startingMovie,
      movieHandleChange: e => {
        setStartingMovie(e.target.value)
      },

      descriptionId: 'startingDescription',
      descriptionValue: startingDescription,
      descriptionHandleChange: e => {
        setStartingDescription(e.target.value)
      },

      pictureId: 'startingPicture',
      pictureValue: startingPicture,
      pictureHandleChange: e => {
        setStartingPicture(e.target.value)
      }
    },

    {
      title: 'Coming Soon',

      movieId: 'comingSoonMovie',
      movieValue: comingSoonMovie,
      movieHandleChange: e => {
        setComingSoonMovie(e.target.value)
      },

      descriptionId: 'comingSoonDescription',
      descriptionValue: comingSoonDescription,
      descriptionHandleChange: e => {
        setComingSoonDescription(e.target.value)
      },

      pictureId: 'comingSoonPicture',
      pictureValue: comingSoonPicture,
      pictureHandleChange: e => {
        setComingSoonPicture(e.target.value)
      }
    }
  ]

  React.useEffect(() => {
    db()
      .collection('data')
      .doc('data')
      .get()
      .then(doc => {
        setNowPlayingMovie(doc.data().nowPlayingMovie)
        setNowPlayingDescription(doc.data().nowPlayingDescription)
        setNowPlayingPicture(doc.data().nowPlayingPicture)

        setStartingMovie(doc.data().startingMovie)
        setStartingDescription(doc.data().startingDescription)
        setStartingPicture(doc.data().startingPicture)

        setComingSoonMovie(doc.data().comingSoonMovie)
        setComingSoonDescription(doc.data().comingSoonDescription)
        setComingSoonPicture(doc.data().comingSoonPicture)
      })
  }, [])

  const updateSite = e => {
    e.preventDefault()
    db()
      .collection('data')
      .doc('data')
      .set(
        {
          nowPlayingMovie: nowPlayingMovie,
          nowPlayingDescription: nowPlayingDescription,
          nowPlayingPicture: nowPlayingPicture,

          startingMovie: startingMovie,
          startingDescription: startingDescription,
          startingPicture: startingPicture,

          comingSoonMovie: comingSoonMovie,
          comingSoonDescription: comingSoonDescription,
          comingSoonPicture: comingSoonPicture
        },
        {
          merge: true
        }
      )
      .then(() => {
        window.location.replace('/')
      })
      .catch(err => {
        console.error('An error occurred while updating the site data:', err)
      })
  }

  const signOut = e => {
    e.preventDefault()
    auth()
      .signOut()
      .then(() => {
        window.location.replace('/')
      })
      .catch(err => {
        console.error('An error occurred while logging out:', err)
      })
  }

  return (
    <form className="aForm">
      <h1 className="mainTitle">Edit</h1>

      {fieldsets.map(item => (
        <fieldset key={item.title} className="fieldset">
          <h2 className="title">{item.title}</h2>
          <label className="label" htmlFor={item.movieId}>
            Movie
          </label>
          <input
            type="text"
            className="input"
            id={item.movieId}
            placeholder="Movie"
            value={item.movieValue}
            onChange={item.movieHandleChange}
          />
          <label className="label" htmlFor={item.descriptionId}>
            Description
          </label>
          <input
            type="text"
            className="input"
            id={item.descriptionId}
            placeholder="Description"
            value={item.descriptionValue}
            onChange={item.descriptionHandleChange}
          />
          <label className="label" htmlFor={item.pictureId}>
            Picture
          </label>
          <input
            type="url"
            className="input"
            id={item.pictureId}
            placeholder="Picture"
            value={item.pictureValue}
            onChange={item.pictureHandleChange}
          />
        </fieldset>
      ))}

      <fieldset className="fieldset">
        <button className="button" onClick={updateSite}>
          Update
        </button>
        <button className="button" onClick={signOut}>
          Logout
        </button>
      </fieldset>
    </form>
  )
}

export default Admin
