import React from 'react'
import { Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { closeModal } from './modalAction';
import LoginForm from '../auth/login/LoginForm';

const actions={
    closeModal
}
const LoginModal = ({closeModal}) => {
    return (
        <Modal size="mini" open={true} onClose={closeModal} >
            <Modal.Header>
                Login To Re Event
            </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <LoginForm closeModal={closeModal} />
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default connect(null,actions)(LoginModal) 
