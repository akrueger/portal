import React from 'react'
import ReactDOM from 'react-dom'

import Container from './components/Container.jsx'

const Main = () =>
	<div>
		<Container/>
	</div>

const root = document.getElementById('root')

ReactDOM.render(<Main/>, root)
