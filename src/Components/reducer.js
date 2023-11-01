export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => {
    return (
        basket?.reduce((amount, item) => item.price + amount, 0)
    )
}


// data layer is state and action is to manipulate
function reducer(state, action) {

    console.log(action);

    // IMPORTANT


    // after every case we have to return how the new state should look like
    switch (action.type) {
        case "ADD_TO_BASKET":
            // logic to add items   
            return {
                ...state, // previous
                basket: [...state.basket, action.item]
            }

        case "REMOVE_FROM_BASKET":
            // logic to add items   

            // we cloned the basket
            let newBasket = [...state.basket]

            // 
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                // item exists in basket, and removed it
                newBasket.splice(index, 1);
            } else {
                console.warn("can't remove", action.id);
            }

            return { ...state, basket: newBasket }

        case "SER_USER":
            return {
                ...state,
                basket: newBasket
            }


        default:
            return state;
    }

}

export default reducer