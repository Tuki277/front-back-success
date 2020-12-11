import React, { Component } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import router from './router'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
	render() {

		return (
			<BrowserRouter>
				<div>
					< Menu />

					<div className="container">
						<div className="row">

							{this.showMenu(router)}

						</div>
					</div>
				</div>
			</BrowserRouter>
		)
	}

	showMenu = (router) => {
		var result = null
		if (router.length > 0) {
			result = router.map((router, index) => {
				return <Route
					key={index}
					path={router.path}
					exact={router.exact}
					component={router.main}
				/>
			})
		}

		return <Switch>{result}</Switch>
	}
}

export default App