import React from 'react'
import { Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { closeModal } from './modalAction';
import RegistrationForm from '../auth/registration/RegistrationForm';
const actions={
    closeModal
}
const RegistrationModal = (props) => {
    return (
        <Modal size="mini" open={true} onClose={props.closeModal} >
            <Modal.Header>
                login Ro Re Event
            </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <RegistrationForm />
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default connect(null,actions)(RegistrationModal) 
