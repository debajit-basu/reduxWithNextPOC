import React,{ Component } from 'react';

import { Provider } from 'react-redux';
import store from '../pages/store/index';
import '../static/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const page = (Page) => {
    return(
        class PageWrapper extends Component{
            render(){
                return(
                    <Provider store={store}>

                        <Page />

                    </Provider>

                )
            }
        }
    )
}
export default page;
