import React, { useState } from 'react'
import axios from 'axios'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN =
  'pk.eyJ1IjoiYWxzbGVhZGVycyIsImEiOiJjang1aXNrcGkwMmR5M3lsZzg4OXFyNWRqIn0.qQib-cz84tOegHyTyc0U9g'

export default function HelloWorld() {
  const [view, setView] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 27.7577,
    longitude: -88.4376,
    zoom: 12
  })

  return (
    <>
      <ReactMapGL
        {...view}
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
