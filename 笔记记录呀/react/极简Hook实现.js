useEffect(() =>{},[])
let states = [];
let isFirstMount = true;
let index = 0;

function useState(state) {
    let initialState = state;
    function setState(state) {

        states[index] = state;
    }
    index++;
    if(isFirstMount) {
        states[index] = initialState;
    }

    return [states[index],setState]
}