import React from 'react'
import Hero from '../../components/Hero'
import Times from '../../components/icons/Times'
import Payment from '../../components/icons/Payment'
import Address from '../../components/icons/Address'
import { db } from '../../db/functions'

const Home = () => {
  let [pageData, setPageData] = React.useState([])

  React.useEffect(() => {
    db()
      .collection('data')
      .doc('data')
      .get()
      .then(doc => {
        setPageData(doc.data())
      })
      .catch(err => {
        console.error('An error occurred while retrieving data:', err)
      })
  }, [])

  const heros = [
    {
      title: 'Times',
      details: ['Opens: 7:00 PM', 'Showtime: 7:30 PM', 'Schedule: Wed-Sun'],
      icon: <Times />
    },
    {
      title: 'Payment',
      details: [
        'Children: $4.00',
        'Teens & Adults: $6.00',
        'No credit cards accepted'
      ],
      icon: <Payment />
    },
    {
      title: 'Address',
      details: ['Cass City', '6464 Main Street (M-81)', '(989) 872-2252'],
      icon: <Address />
    }
  ]

  return (
    <>
      <Hero
        type="movie"
        title={pageData.nowPlayingMovie}
        description={pageData.nowPlayingDescription}
        image={pageData.nowPlayingPicture}
      />
      {pageData.startingMovie && (
        <Hero
          type="movie"
          title={pageData.startingMovie}
          description={pageData.startingDescription}
          image={pageData.startingPicture}
        />
      )}
      {pageData.comingSoonMovie && (
        <Hero
          type="movie"
          title={pageData.comingSoonMovie}
          description={pageData.comingSoonDescription}
          image={pageData.comingSoonPicture}
        />
      )}
      {heros.map(item => (
        <Hero
          key={item.title}
          type="details"
          title={item.title}
          details={item.details}
        >
          {item.icon}
        </Hero>
      ))}
    </>
  )
}

export default Home
