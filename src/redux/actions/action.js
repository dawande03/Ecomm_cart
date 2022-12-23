export const ADD = (item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

// delete

export const DLT = (id)=>{
    return{
        type:"RMV_CART",
        payload:id
    }
}

// decriment 

export const DEC = (item)=>{
    return {
        type:"DEC_ITEM",
        payload:item
    }
}
