var initialState = [
    {
        id : 1,
        name : 'san pham 1',
        price : 500,
        status : true
    },
    {
        id : 2,
        name : 'san pham 2',
        price : 400,
        status : false
    },
    {
        id : 3,
        name : 'san pham 3',
        price : 200,
        status : true
    }
]

const products = (state = initialState, action) => {
    switch(action.type) {
        default : return [...state]
    }
}

export default products