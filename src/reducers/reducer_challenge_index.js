const initialState = {
    // 0 = Game Start, 5 = Game Won
    active_challenge: 0,
    array: [1,2,3,4]
};

export default function(state = initialState, action){

    switch(action.type) {
        case 'INCREMENT_CHALLENGE':
            return {
              active_challenge: action.active_challenge,
                array: [1,2,3,4]
            };
        default:
            return state;
    }
}