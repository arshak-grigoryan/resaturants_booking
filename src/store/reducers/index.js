import produce from 'immer';
import defaultState from './defaultState';
import {
    OPEN_BASKET,
    CLOSE_BASKET,
    ADD_ITEM_BASKET,
    DELETE_ITEM_BASKET,
    INCREASE_ITEM,
    DECREASE_ITEM,
    ADD_RESTAURANTS,
    ADD_SEARCH_NAME,
    SELECT_KITCHEN_TYPE,
} from '../constants';

const shopReducer = produce((state = defaultState, actions) => {
    const { type, payload } = actions;

    switch(type) {
        case OPEN_BASKET:
            state.basketVisibility = true
            return state
        case CLOSE_BASKET:
            state.basketVisibility = false
            return state
        case ADD_ITEM_BASKET:
            const { name } = payload.item
            const isExist = state.basket.find((item) => item.name === name)
            if(isExist) {
                state.basket.forEach((item) => {
                    if(item.name === name) {
                        item = {...item, count: item.count++}
                    }
                })                
            } else {
                state.basket.push({...payload.item, count: 1})
            }
            return state
        case DELETE_ITEM_BASKET:
            return state
        case INCREASE_ITEM:
            return state
        case DECREASE_ITEM:
            return state
        case ADD_RESTAURANTS:
            payload.restaurants.forEach((restaurant) => {
                state.restaurants.push(restaurant)
            });
            return state
        case ADD_SEARCH_NAME:
            state.searchedName = payload.name.toLowerCase()
            return state
        case SELECT_KITCHEN_TYPE:
            state.selectedKitchenType = payload.kitchenType
            return state
        default:
            return state
    }
})

export default shopReducer