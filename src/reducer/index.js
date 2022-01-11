import {combineReducers} from 'redux';

const initialState = [];

const News = (state=initialState,action)=>{
    if(action.type==='FETCH_NEWS'){
        return action.payload;
    }else{
        return state;
    }
}

const rootReducer = combineReducers({
    News
});
export default rootReducer;