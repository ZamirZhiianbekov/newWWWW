const initialState = {
    product: [],
    basket: [],
    favorite:[]
}
//action
//payload
//title

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCT":
            return {...state, product: action.payload}
        case "ADD_TO_BASKET":
            const foundBasket = state.basket.find(el => el.id === action.payload)
            if (foundBasket) {
                return {...state, basket: state.basket.map(el => el.id === foundBasket.id ? {...el, count: el.count + 1} : el)}
            } else {
                return {...state, basket: [...state.basket, {...action.payload,count:  1}]}
            }
        case "ADD_TO_FAVORITE" : {
             const foundFavorite = state.favorite.find(el => el.id === action.payload.id)
            if (foundFavorite) {
                return {...state, favorite: state.favorite.filter(el => el.id !== foundFavorite.id)}
            } else {
                return {...state, favorite: [...state.favorite, action.payload]}
            }
        }
            return
        case "DELETE_PRODUCT":
            return {...state, basket: state.basket.filter(el => el.id !== action.payload.id)}
        default:
            return state
    }
}