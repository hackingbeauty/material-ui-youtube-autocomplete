import React      from 'react'
import {render}   from 'react-dom'

import Component  from '../../src'

let Demo = React.createClass({
	yourCallback(searchResults) {
		console.log('searchResults are: ', searchResults);
	},

  render() {
    return <div>
      <Component
				apiKey			='AIzaSyAtSE-0lZOKunNlkHt8wDJk9w4GjFL9Fu4'
			  maxResults	='20'
			  placeHolder	='Search Youtube'
			  callback 		={this.yourCallback} />
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
