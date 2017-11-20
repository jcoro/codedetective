const initialState = {
    codes: ['Java', 'Python','JavaScript'],
    selectedLanguage: 'Java'
};
export default function(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_LANGUAGE':
            return {
                codes: ['Java', 'Python','JavaScript'],
                selectedLanguage: action.newLanguage,
            };
        default:
            return state;
    }
}