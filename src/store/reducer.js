
const defaultState = {
    off:false
}


export default (state = defaultState,action) =>{
  if(action.type === 'change_button'){
    const newState = JSON.parse(JSON.stringify(state));
      newState.off = action.off;
      return newState
  };
  return state;
}