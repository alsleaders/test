import React, { Component } from 'react'
import axios from 'axios'

const MY_KEY = '6w6euCCRI88Lz6cJIMDx9UCoLYyABMwo'

//   /* <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=${MY_KEY}&libraries=places"></script>
// const API_URL =
//   'https://maps.googleapis.com/maps/api/place/findplacefromtext/json' */

class HelloWorld extends Component {
  state = {
    array: []
  }

  componentDidMount() {
    axios
      .get(
        `https://www.mapquestapi.com/search/v4/place?sort=relevance&feedback=false&key=${MY_KEY}`
      )
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          array: data.searchResults
        })
      })
  }

  render() {
    return (
      <>
        <h1>Hello, World!</h1>

        <ul>
          {this.state.array.map(place => {
            return (
              <li>
                {place.name}
                <p>did this work?</p>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default HelloWorld

// AIzaSyBb9ARD8xZdXaSNZXxq-aaVem1gjK5vgQ4
// AIzaSyCrA3wbLTGgRfbH7QfumI7t9VDer3Q9QBw
