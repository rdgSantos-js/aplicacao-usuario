import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'





const mapDispatchToProps = dispatch => ({
    dispatch: (message, author, datetime) => {
        dispatch(addMessage(message, author, datetime)); 
    }
});

export const AddMessage = connect(()=>({}), mapDispatchToProps)(AddMessageComponent)