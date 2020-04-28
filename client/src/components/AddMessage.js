
import React from 'react'
import propTypes from 'prop-types'
import User from './User';

const AddMessage = (props) => {
	
	let input;

	return (
		<section className="add-message">

			<form className="row" onSubmit={e=>{

				e.preventDefault();

				let now = new Date();
				let date = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
				let hours = `${("0" + now.getHours()).slice(-2)}:${("0" + now.getMinutes()).slice(-2)}:${("0" + now.getSeconds()).slice(-2)}`;
				let datetime = date + ' - ' + hours;

				if (input.value === ''){
					return;
				}else{

				const url = "http://localhost:8080/";

				const message = input.value;
				const author = User.getUser();

				const req = JSON.stringify({
					message,
					author,	
					datetime,
					messageType: 'normal'
				});

				fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: req
				});

				props.dispatch
				(input.value, author, datetime);
				input.value = ''
				}	

				
			}}>

			<input type="text" className="col-10"
					ref={(node) => {
						input = node
			}}/>
			
			<button type="submit" className="col-1 offset-1"><i className="fa fa-paper-plane" /></button>
		</form>
	</section>
	)
}

AddMessage.propTypes = {
	dispatch: propTypes.func.isRequired
}

export default AddMessage