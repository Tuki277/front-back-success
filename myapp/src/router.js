import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import NotFoundHomePage from './pages/NotFoundHomePage/NotFoundPage'
import ProductsListPage from './pages/ProductsListPage/ProductsListPage'
import ProductsActionsPage from './pages/ProductsActionPage/ProductsActionsPage'

const router = [
    {
        path : '/',
        exact : true,
        main: () => <HomePage />
    },
    {
        path : '/products-list',
        exact : false,
        main: () => <ProductsListPage />
    },
    {
        path : '/products/add',
        exact : false,
        main : ({history}) => <ProductsActionsPage history={history}/>
    },
    {
        path : '/products/:id/edit',
        exact : false,
        main : ({ match, history }) => <ProductsActionsPage match={match} history={history}/>
    },
    {
        path : '',
        exact : false,
        main: () => <NotFoundHomePage />
    }
]

export default router