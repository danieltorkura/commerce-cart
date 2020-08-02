import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } from './actions'

function reducer(state, action) {
    if (action.type === CLEAR_CART) {
        return {
            ...state, cart: []
        }
    }
    if (action.type === DECREASE) {
        // let tempCart = []
        // if (action.payload.amount === 1) {
        //     tempCart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
        // } else {
        let tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    cartItem = { ...cartItem, amount: cartItem.amount - 1 }
                }

                return cartItem
            })
        // }
        return {
            ...state, cart: tempCart
        }
    }
    if (action.type === INCREASE) {
        // const tempCart = state.cart.map((cartItem) => {
        //     if(cartItem.id === action.payload.id) {
        //         cartItem = {...cartItem, amount : cartItem.amount + 1}
        //     }

        //     return cartItem
        // })

        const tempCart = state.cart.map((cartItem) => cartItem.id === action.payload.id ?
         { ...cartItem, amount: cartItem.amount + 1 } : cartItem)

        return {
            ...state, cart: tempCart
        }
    }
    if (action.type === REMOVE) {
        return {
            ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
        }
    }

    if (action.type === GET_TOTALS) {
        let { total, amount } = state.cart.reduce((totalCart, cartItem) => {
            console.log(totalCart)
            console.log(cartItem)
            // Need a better explanation
            let { price, amount } = cartItem
            let itemTotal = price * amount

            totalCart.total += itemTotal
            totalCart.amount += amount
            // Major thing is how we have been able to link it to total/amount
            return totalCart
        },
            {
                total: 0,
                amount: 0
            })
            total = parseFloat(total.toFixed(2))
        return {
            ...state, total, amount
        }
    }
    if(action.type === TOGGLE_AMOUNT) {
        return {
            ...state, cart: state.cart.map((cartItem) => {
                if(cartItem.id === action.payload.id) {
                    if(action.payload.toggle === 'inc') {
                        cartItem = { ...cartItem, amount: cartItem.amount + 1 }
                    }
                    if(action.payload.toggle === 'dec') {
                        cartItem = { ...cartItem, amount: cartItem.amount - 1 }
                    }
                }
                return cartItem
            })
        }
    }

    return state
}

export default reducer