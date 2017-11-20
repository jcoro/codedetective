const initialState = [
        {
            id: 0,
            isCompleted: false
        },
        {
            id: 1,
            isCompleted: false
        },
        {
            id: 2,
            isCompleted: false
        },
        {
            id: 3,
            isCompleted: false
        },
        {
            id: 4,
            isCompleted: false
        }
    ];

export default function (state = initialState, action) {

    switch (action.type) {
        case 'MARK_AS_COMPLETED':
            return state.map(challenge =>
                (challenge.id === action.id)
                    ? {...challenge, isCompleted: true}
                    : challenge
            );
        default:
            return state;
    }
}