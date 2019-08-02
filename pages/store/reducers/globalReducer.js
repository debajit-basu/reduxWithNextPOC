
const globalReducer = (state = {} , action) => {
    switch(action.type){
        case 'TOGGLE_LOGIN_MODAL':
            return{
                ...state,
                loginModal: !state.loginModal
            }
        case 'TOGGLE_REGISTER_MODAL':
            return{
                ...state,
                registerModal: !state.registerModal
            }
        case 'HAVE_ACCOUNT':
            return{
                ...state,
                registerModal: !state.registerModal,
                loginModal: !state.loginModal
            }
        case 'DONT_HAVE_ACCOUNT':
            return{
                ...state,
                loginModal: !state.loginModal,
                registerModal: !state.registerModal,

            }

        default:
            return state
    }


}

export default globalReducer;
