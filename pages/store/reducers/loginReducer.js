
const loginReducer = (state = {} , action) => {
    switch(action.type){
        case 'LOGIN':
            // action.formData);
            console.log(state);
            if(state.email === action.formData.email && state.password === action.formData.password){
                return {
                    ...state,
                    isLogin: !state.isLogin,
                    loginStatus: !state.loginStatus
                }
            }else{
                return{
                    ...state,
                    isLogin: false,
                    loginStatus: false
                }
            }

        case 'LOGOUT':
            return{
                ...state,
                isLogin: false,
                loginStatus: false
            }


        default:
            return state
    }


}

export default loginReducer;
