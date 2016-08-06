import React from 'react'
import ReactDOM from 'react-dom'

import Container from './components/Container.jsx'

require('./styles/main.styl')

const Main = () =>
	<div>
		<Container/>
	</div>

const root = document.getElementById('root')

ReactDOM.render(<Main/>, root)
