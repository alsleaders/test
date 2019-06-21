import React, { useState } from 'react'
import axios from 'axios'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// const MY_KEY = '6w6euCCRI88Lz6cJIMDx9UCoLYyABMwo'

const TOKEN =
  'pk.eyJ1IjoiYWxzbGVhZGVycyIsImEiOiJjang1aXNrcGkwMmR5M3lsZzg4OXFyNWRqIn0.qQib-cz84tOegHyTyc0U9g'

//   /* <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=${MY_KEY}&libraries=places"></script>
// const API_URL =
//   'https://maps.googleapis.com/maps/api/place/findplacefromtext/json' */

export default function HelloWorld() {
  const [view, setView] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 27.7577,
    longitude: -88.4376,
    zoom: 8
  })

  // componentDidMount() {
  //   axios
  //     .get()
  //     .then(resp => resp.json())
  //     .then(data => {
  //       this.setState({
  //         array: data.searchResults
  //       })
  //     })
  // }

  return (
    <>
      <ReactMapGL {...view} mapboxApiAccessToken={TOKEN}>
        <h1>Map that will take input</h1>
      </ReactMapGL>
    </>
  )
}

// AIzaSyBb9ARD8xZdXaSNZXxq-aaVem1gjK5vgQ4
// AIzaSyCrA3wbLTGgRfbH7QfumI7t9VDer3Q9QBw
