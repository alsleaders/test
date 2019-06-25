import React, { useState } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import cityData from './data/cities.json'
import Headers from './components/Headers'

const TOKEN =
  'pk.eyJ1IjoiYWxzbGVhZGVycyIsImEiOiJjang1aXNrcGkwMmR5M3lsZzg4OXFyNWRqIn0.qQib-cz84tOegHyTyc0U9g'

export default function HelloWorld() {
  const [view, setView] = useState({
    latitude: 27.9506,
    longitude: -82.4572,
    zoom: 4
  })
  const [selectedInfo, setSelectedInfo] = useState(null)

  return (
    <>
      <Headers />
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
        <div style={{ position: 'absolute', left: 0 }}>
          <NavigationControl />
        </div>
        {cityData.map(city => {
          return (
            <Marker
              key={city.rank}
              latitude={city.latitude}
              longitude={city.longitude}
            >
              <button
                onClick={e => {
                  e.preventDefault()
                  setSelectedInfo(city)
                }}
              >
                Goal
              </button>
            </Marker>
          )
        })}

        {selectedInfo ? (
          <Popup
            latitude={selectedInfo.latitude}
            longitude={selectedInfo.longitude}
            onClose={() => {
              setSelectedInfo(null)
            }}
          >
            <h2>{selectedInfo.city}</h2>
            <p>{selectedInfo.population}</p>
          </Popup>
        ) : null}
      </ReactMapGL>
    </>
  )
}
