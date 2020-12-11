import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import callApi from '../../utils/apiCaller'

class ProductsActionsPage extends Component {

	constructor(props) {
		super(props)
		this.state = {
			id: '',
			txtName: '',
			txtPrice: '',
			txtCheck: ''
		}
	}

	// update trong form
	componentDidMount() {
		var { match } = this.props
		console.log(this.props.match)
		if (match) {
			var id = match.params.id
			console.log(id)
			callApi(`/${id}`, 'GET', null).then(res => {
				console.log(res.data.data)
				var data = res.data
				this.setState({
					id : data.data._id,
					txtName: data.data.name,
					txtPrice: data.data.price,
					txtCheck: data.data.status
				})
			})
		}
	}

	// onChange trong form
	onChange = (e) => {
		var target = e.target
		var name = target.name
		var value = target.type === 'checkbox' ? target.checked : target.value
		this.setState({
			[name]: value
		})
	}

	// save data trong form va gui ve server
	onSave = (e) => {
		var { id, txtName, txtPrice, txtCheck } = this.state
		var { history } = this.props
		e.preventDefault()
		console.log('onSave =================== ', this.state)
		if (id) { // truong hop update, co id vi update theo id
			callApi(`/${id}`, 'PUT', {
				name : txtName,
				price : txtPrice,
				check : txtCheck
			}).then(res => {
				history.goBack()
			})
		} else {
			callApi('/', 'POST', {
				name: txtName,
				price: txtPrice,
				check: txtCheck
			}).then(res => {
				console.log('res post ==================================== ', res)
				history.goBack() //Ham history cua router, sau khi them san pham thi ve lai trang san pham
				// history.push('/') //Tro ve trang chu sau khi them san pham truyen vao push("URL")
			})
		}

	}

	render() {

		var { txtName, txtCheck, txtPrice } = this.state

		return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<form action="" method="POST" role="form" onSubmit={this.onSave}>
					<div className="form-group">
						<label>Name : </label>
						<input
							type="text"
							className="form-control"
							name='txtName'
							value={txtName}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label>Price : </label>
						<input
							type="number"
							className="form-control"
							name='txtPrice'
							value={txtPrice}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label>Status : </label>
					</div>
					<div className="checkbox">
						<label>
							<input
								type="checkbox"
								name='txtCheck'
								value={txtCheck}
								onChange={this.onChange}
								checked={txtCheck}
							/>
							Stocking
						</label>
					</div>
					<button type="submit" className="btn btn-primary">Save</button>
					<Link to='/products-list' className="btn btn-danger">
						Back
					</Link>
				</form>
			</div>
		)
	}
}

export default ProductsActionsPage