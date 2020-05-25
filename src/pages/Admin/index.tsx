import React from 'react'
import AdminStyles from './styles'
import { db, auth } from '../../db/functions'

const Admin = () => {
  let [nowPlayingMovie, setNowPlayingMovie] = React.useState<string>('')
  let [nowPlayingDescription, setNowPlayingDescription] = React.useState<
    string
  >('')
  let [nowPlayingPicture, setNowPlayingPicture] = React.useState<string>('')

  let [startingMovie, setStartingMovie] = React.useState<string>('')
  let [startingDescription, setStartingDescription] = React.useState<string>('')
  let [startingPicture, setStartingPicture] = React.useState<string>('')

  let [comingSoonMovie, setComingSoonMovie] = React.useState<string>('')
  let [comingSoonDescription, setComingSoonDescription] = React.useState<
    string
  >('')
  let [comingSoonPicture, setComingSoonPicture] = React.useState<string>('')

  React.useEffect(() => {
    db()
      .collection('data')
      .doc('data')
      .get()
      .then((doc: any) => {
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

  const updateSite = (e: React.MouseEvent) => {
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
      .catch((err: Error) => {
        console.error('An error occurred while updating the site data:', err)
      })
  }

  const signOut = (e: React.MouseEvent) => {
    e.preventDefault()
    auth()
      .signOut()
      .then(() => {
        window.location.replace('/')
      })
      .catch((err: Error) => {
        console.error('An error occurred while logging out:', err)
      })
  }

  return (
    <AdminStyles>
      <h1 className="mainTitle">Edit</h1>
      <fieldset className="fieldset">
        <h2 className="title">Now Playing</h2>
        <label className="label" htmlFor="nowPlayingMovie">
          Movie
        </label>
        <input
          type="text"
          className="input"
          id="nowPlayingMovie"
          placeholder="Movie"
          value={nowPlayingMovie}
          onChange={e => {
            setNowPlayingMovie(e.target.value)
          }}
        />
        <label className="label" htmlFor="nowPlayingDescription">
          Description
        </label>
        <input
          type="text"
          className="input"
          id="nowPlayingDescription"
          placeholder="Description"
          value={nowPlayingDescription}
          onChange={e => {
            setNowPlayingDescription(e.target.value)
          }}
        />
        <label className="label" htmlFor="nowPlayingPicture">
          Picture
        </label>
        <input
          type="url"
          className="input"
          id="nowPlayingPicture"
          placeholder="Picture"
          value={nowPlayingPicture}
          onChange={e => {
            setNowPlayingPicture(e.target.value)
          }}
        />
      </fieldset>

      <fieldset className="fieldset">
        <h2 className="title">Starting</h2>
        <label className="label" htmlFor="startingMovie">
          Movie
        </label>
        <input
          type="text"
          className="input"
          id="startingMovie"
          placeholder="Movie"
          value={startingMovie}
          onChange={e => {
            setStartingMovie(e.target.value)
          }}
        />
        <label className="label" htmlFor="startingDescription">
          Description
        </label>
        <input
          type="text"
          className="input"
          id="startingDescription"
          placeholder="Description"
          value={startingDescription}
          onChange={e => {
            setStartingDescription(e.target.value)
          }}
        />
        <label className="label" htmlFor="startingPicture">
          Picture
        </label>
        <input
          type="url"
          className="input"
          id="startingPicture"
          placeholder="Picture"
          value={startingPicture}
          onChange={e => {
            setStartingPicture(e.target.value)
          }}
        />
      </fieldset>

      <fieldset className="fieldset">
        <h2 className="title">Coming Soon</h2>
        <label className="label" htmlFor="comingSoonMovie">
          Movie
        </label>
        <input
          type="text"
          className="input"
          id="comingSoonMovie"
          placeholder="Movie"
          value={comingSoonMovie}
          onChange={e => {
            setComingSoonMovie(e.target.value)
          }}
        />
        <label className="label" htmlFor="comingSoonDescription">
          Description
        </label>
        <input
          type="text"
          className="input"
          id="comingSoonDescription"
          placeholder="Description"
          value={comingSoonDescription}
          onChange={e => {
            setComingSoonDescription(e.target.value)
          }}
        />
        <label className="label" htmlFor="comingSoonPicture">
          Picture
        </label>
        <input
          type="url"
          className="input"
          id="comingSoonPicture"
          placeholder="Picture"
          value={comingSoonPicture}
          onChange={e => {
            setComingSoonPicture(e.target.value)
          }}
        />
      </fieldset>
      <fieldset className="fieldset">
        <button className="button" onClick={updateSite}>
          Update
        </button>
        <button className="button" onClick={signOut}>
          Logout
        </button>
      </fieldset>
    </AdminStyles>
  )
}

export default Admin
