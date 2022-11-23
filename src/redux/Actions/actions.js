export const ADD_TASK = 'ADD_TASK';
export const DELETE_ALL = 'DELETE_ALL';
export const REMOVE_TASK = 'REMOVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const COMPLETED_TASK = 'COMPLETED_TASK';
export const ALL_TASK = 'ALL_TASK';
export const ACTIVE_TASK ='ACTIVE_TASK';


export const addTask=(payload)=>{
    return{
        type: ADD_TASK,
        payload
    }
}

export const deleteAllTask = () =>{
    return{
        type: DELETE_ALL
    }
}

export const removeTask = (payload) =>{
    return{
        type:REMOVE_TASK,
        payload
    }
}

export const editTask = (payload) =>{
    console.log(payload)
    return{
        type:UPDATE_TASK,
        payload
    }
}

export const handleCheckbox=(payload)=>{
    return{
        type: UPDATE_CHECKBOX,
        payload
    }
}

