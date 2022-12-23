const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1;
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case "RMV_CART":
            const data = state.carts.filter((item) => item.id !== action.payload);
            return {
                ...state,
                carts: data
            }
        
        case "DEC_ITEM":
            const itemIndex_Dec = state.carts.findIndex((item) => item.id === action.payload.id);
            if(state.carts[itemIndex_Dec].qnty >=1){
                const dltitem = state.carts[itemIndex_Dec].qnty -= 1
                return{
                    ...state,
                    carts:[...state.carts,dltitem]
                }
            }
        default: return state
    }
}
