import React, { useState } from 'react'
import axios from 'axios'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN =
  'pk.eyJ1IjoiYWxzbGVhZGVycyIsImEiOiJjang1aXNrcGkwMmR5M3lsZzg4OXFyNWRqIn0.qQib-cz84tOegHyTyc0U9g'

export default function HelloWorld() {
  const [view, setView] = useState({
    latitude: -10.9506,
    longitude: 45.4572,
    // center: [-21.9270884, 64.1436456],
    zoom: 4
  })

  return (
    <>
      <ReactMapGL
        {...view}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={view => {
          setView(view)
        }}
      >
        <h1>Map that will take input</h1>
      </ReactMapGL>
    </>
  )
}
