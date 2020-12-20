import React from 'react'
import Modal from 'react-native-modal';


const SimpleModal = (props) => {
    return ( 
        <Modal
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        animationIn='fadeInDown' animationOut='fadeOutUp' isVisible={props.open}
            onBackdropPress={props.close}
            transparent
        >
            {props.body}
        </Modal>
     )
}
 
export default SimpleModal