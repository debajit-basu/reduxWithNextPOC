import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    InputGroup,
    InputGroupAddon,
    Input,
    Col, Row
} from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LoginModal: false,
            email: '',
            password: ''
        };

        this.toggle = this.toggle.bind(this);
    }


    toggle(key) {
        if(key === 'close'){
            this.props.loginClick();
        }

        this.setState(prevState => ({
            LoginModal: !prevState.LoginModal
        }));

    }

    componentDidMount() {
        this.toggle();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.loginState);
        if(this.props.loginState.loginStatus){
            this.toggle('close');
            this.setState({
                email: '',
                password: ''
            })
        }else{
            console.log("something is wrong with login");
        }
    }

    getFormData = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    login = () => {
        console.log(this.state);
        const formdata = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(formdata);

    }

    render() {

        return (
            <>
                {/*<div>
                    <h1 style={{cursor: 'pointer' , color: 'red'}} onClick={() => this.toggle()}>Login Here</h1>
                </div>*/}


                <div>
                    <Modal backdrop='static' keyboard={false} isOpen={this.state.LoginModal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle.bind(this,'close')}></ModalHeader>
                        <ModalBody>

                            <div className="row padding-0-7x font-2x font-weight-light heading-panel" style={{background:'#E6ECF3'}}>
                                <div className="col-12 blue-text">
                                    <span className="d-flex justify-content-center">Login</span>
                                </div>
                            </div>


                            <div className="row padding-0-7x heading-panel">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Email:</InputGroupAddon>
                                    <Input
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.getFormData.bind(this)}
                                    />
                                </InputGroup>
                            </div>


                            <div className="row padding-0-7x heading-panel">
                                <InputGroup>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">Password:</InputGroupAddon>
                                        <Input
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.getFormData.bind(this)}
                                        />
                                    </InputGroup>
                                </InputGroup>
                            </div>

                            <hr/>
                            <Row>
                                <Col className="font-weight-light font-1-4x primary-color-text" sm="12" md={{ size: 8, offset: 5 }}>
                                    **Don't Have an account?<span className="font-weight-bold pointer"
                                                                  onClick={this.props.DontHaveAccount}>Register now</span></Col>
                            </Row>



                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.login}>Login</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </>




        )

    }
}

const mapStateToProps = (state) => {
    return {
        globalVariableProp: state.globalVariable,
        loginState: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        loginClick: () => {dispatch({type: 'TOGGLE_LOGIN_MODAL'})},
        DontHaveAccount: () => {dispatch({type: 'DONT_HAVE_ACCOUNT'})},
        login: (obj) => {dispatch({type: 'LOGIN' , formData: obj})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
