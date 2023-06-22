import {
    ADD_TO_CART,
    CHANGE_CURRENCY,
    DECREASE_FROM_CART,
    DELETE_FROM_BASKET,
    GET_PRODUCTS,
    GET_SINGLE_PRODUCT,
} from "./Types/Types";

const initialValue = {
    products: [],
    singleProduct: [],
    wishlist: [],
    cart: JSON.parse(localStorage.getItem("cart")) || []
};

const Reducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_SINGLE_PRODUCT:
            return {...state, singleProduct: [action.payload]}
        case GET_PRODUCTS:
            return {...state, products: action.payload};
        case ADD_TO_CART: {
            const findItem = state.cart?.find((el) => el.id === action.payload.id);
            if (findItem) {
                return {
                    ...state,
                    cart: state.cart.map((el) =>
                        el.id === action.payload.id
                            ? {...el, quantity: el.quantity + 1}
                            : el
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, {...action.payload, quantity: 1}],
                };
            }
        }

        case DELETE_FROM_BASKET:
            return {
                ...state,
                cart: state.cart.filter((el) => el.id !== action.payload),
            };

        case DECREASE_FROM_CART:
            const findItem = state.cart?.find((el) => el.id === action.payload.id);
            if (findItem.quantity > 1) {
                return {
                    ...state,
                    cart: state.cart.map((el) => {
                        return el.id === action.payload.id
                            ? {...el, quantity: el.quantity - 1}
                            : el;
                    }),
                };
            }
            ;
        case CHANGE_CURRENCY:
            return {...state, defaultCurrency: action.payload}

        default:
            return state;
    }
};
