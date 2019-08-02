import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, InputGroup ,Input , Row , Col} from 'reactstrap';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RegisterModal: false
        };

        this.RegisterModalToggle = this.RegisterModalToggle.bind(this);
    }

    RegisterModalToggle(key) {
        if(key === 'close'){
            this.props.registerClick();
        }

        this.setState(prevState => ({
            RegisterModal: !prevState.RegisterModal
        }));
    }

    componentDidMount() {
        this.RegisterModalToggle();
    }


    render() {
        // console.log(this.props.newsItem);
        return (
            <>
                {/*<div>
                    <h1 style={{cursor: 'pointer' , color: 'red'}} onClick={() => this.RegisterModalToggle()}>Register Now</h1>
                </div>*/}


                <div>
                    <Modal isOpen={this.state.RegisterModal} toggle={this.RegisterModalToggle}>
                        <ModalHeader toggle={this.RegisterModalToggle.bind(this,'close')}></ModalHeader>
                        <ModalBody>

                            <div className="row padding-0-7x font-2x font-weight-light heading-panel" style={{background:'#E6ECF3'}}>
                                <div className="col-12 blue-text">
                                    <span className="d-flex justify-content-center">Register User</span>
                                </div>
                            </div>

                            <Row className="p-2">
                                <Col sm={6}>
                                    <div className="row padding-0-7x heading-panel">
                                        <Label>First Name</Label>
                                        <InputGroup>
                                            <Input
                                                type="text"
                                                name="fname"
                                            />
                                        </InputGroup>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="row padding-0-7x heading-panel">
                                        <Label>Last Name</Label>
                                        <InputGroup>
                                            <InputGroup>
                                                <Input
                                                    type="text"
                                                    name="lname"
                                                />
                                            </InputGroup>
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <div className="row padding-0-7x heading-panel">
                                        <Label>Email</Label>
                                        <InputGroup>
                                            <Input
                                                type="email"
                                                name="email"
                                            />
                                        </InputGroup>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="row padding-0-7x heading-panel">
                                        <Label>Phone</Label>
                                        <InputGroup>
                                            <Input
                                                type="number"
                                                name="phone"
                                            />
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <div className="row padding-0-7x heading-panel">
                                        <Label>Address</Label>
                                        <InputGroup>
                                            <Input
                                                type="textarea"
                                                name="email"
                                            />
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <div className="row padding-0-7x heading-panel">
                                        <Label>Password</Label>
                                        <InputGroup>
                                            <Input
                                                type="password"
                                                name="password"
                                            />
                                        </InputGroup>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="row padding-0-7x heading-panel">
                                        <Label>Confirm Password</Label>
                                        <InputGroup>
                                            <Input
                                                type="password"
                                                name="confirmPassword"
                                            />
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col className="font-weight-light font-1-4x primary-color-text" sm="12" md={{ size: 8, offset: 5 }}>
                                    **Already Have an account?<span className="font-weight-bold pointer"
                                                                    onClick={this.props.alreadyHaveAccount}>Login now</span></Col>
                            </Row>



                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary">SignUp</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </>




        )

    }
}

const mapStateToProps = (state) => {
    return {
        newsItem: state.news
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        registerClick: () => {dispatch({type: 'TOGGLE_REGISTER_MODAL'})},
        alreadyHaveAccount: () => {dispatch({type: 'HAVE_ACCOUNT'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);
