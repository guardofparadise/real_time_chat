import React from 'react';
import { db } from './firebase';

function ChatInputBox() {
  return (
    <form onSubmit={event => {
			event.preventDefault();
			const value = event.target.elements[0].value;
			db
				.collection('channels')
				.doc('general')
				.collection('messages')
				.add({
					text: value,
					createdAt: new Date()
				})
		}} className="ChatInputBox">
      <input className="ChatInput" placeholder="Message #general" />
    </form>
  );
}

export default ChatInputBox;
