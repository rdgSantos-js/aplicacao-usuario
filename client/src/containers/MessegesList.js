import { connect } from 'react-redux';
import MessagesListComponent from '../components/MessagesList';
import { fetchData } from '../actions/injectDbData';

const url = "http://localhost:8080/";

    setInterval(e=>{fetch(url)
    .then(response => response.json())
    .then(res=>{
        fetchData(res);
    })}, 5000);

export const MessagesList = connect(state =>({
    messages: state.messages
}), {})(MessagesListComponent);
