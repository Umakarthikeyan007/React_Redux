import {createStore} from "redux";

const reducer =(state={counter:0},action)=>{

  if(action.type === "Inc"){
    return {counter: state.counter+ 1};
  }
  if(action.type === "Dec"){
    return {counter: state.counter- 1};
  }
  if(action.type === "add"){
    return {counter : state.counter + action.payload}
  }
  return state;
}

const Store = createStore(reducer);
export default Store;