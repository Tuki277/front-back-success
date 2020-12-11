import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProductsItem extends Component {

    onDelete = (id) => {
        console.log('id san pham can xoa ========================== ', id)
        if (confirm('Ban co muon xoa khong ?')){ //eslint-disable-line
            console.log(id)
            this.props.onDelete(id)
        }
    }

    render() {
        var { products, index } = this.props
        var statusName = products.status ? 'Stocking' : 'Sold'
        var statusClass = products.status ? 'warning' : 'default'
        return (
            <tr>
                <td>{ index + 1 }</td>
                <td>{ products.name }</td>
                <td>{ products.price }</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link
                        to={`/products/${products._id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Edit
                    </Link>

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick = {() => this.onDelete(products._id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default ProductsItem