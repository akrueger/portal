import React from 'react'
import ReactDOM from 'react-dom'

// const Main = () => 6

// const root = document.getElementById('root')

// ReactDOM.render(<Main/>, root)

// tutorial1-raw.js
const Main = React.createClass({
	render() {
		const hw = 'Hello World'
		return (
			<div>{hw}</div>
    )
	}
})

const root = document.getElementById('root')

ReactDOM.render(<Main/>, root)
