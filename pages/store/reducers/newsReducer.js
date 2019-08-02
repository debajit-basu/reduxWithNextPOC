// import { FETCH_NEWS } from '../action/newsAction';



const newsReducer = (state = {} , action) => {
    switch(action.type){
        case 'FETCH_NEWS':

            return action.news


        case 'HIT_LIKE':

            return state.map((val) => {
                if(val.id === action.id){

                    if(val.like === 0){
                        if(val.dislike === 1){
                            return {
                                ...val,
                                like: 1,
                                totalLike: val.totalLike +1,
                                dislike: 0,
                                totalDislike: val.totalDislike -1
                            }

                        }else{
                            return {
                                ...val,
                                like: 1,
                                totalLike: val.totalLike +1
                            }
                        }

                    }else{
                        return {
                            ...val,
                            like: 0,
                            totalLike: val.totalLike -1
                        }
                    }

                }else return val;
            })


        case 'HIT_DISLIKE':

            return state.map((val) => {
                if(val.id === action.id){

                    if(val.dislike === 0){
                        if(val.like === 1){
                            return {
                                ...val,
                                dislike: 1,
                                totalDislike: val.totalDislike +1,
                                like: 0,
                                totalLike: val.totalLike -1
                            }
                        }else{

                            return {
                                ...val,
                                dislike: 1,
                                totalDislike: val.totalDislike +1
                            }

                        }

                    }else{
                        return {
                            ...val,
                            dislike: 0,
                            totalDislike: val.totalDislike -1
                        }
                    }

                }else return val;

            })

        default:
            return state
    }


}

export default newsReducer;
