import React from 'react'
import propTypes from 'prop-types'
import Message from './message'


const MessagesList = ({ messages }) => (
	
	messages.map(message => (
		<Message key={message.id}
			{...message}
		/>
	))
)

MessagesList.propTypes = {
	messages: propTypes.arrayOf(
		propTypes.shape({
			message: propTypes.string.isRequired,
			author: propTypes.string.isRequired,
		}).isRequired
	).isRequired
}

export default MessagesList