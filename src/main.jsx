import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

function emitComment(id) {
	setInterval(() => {
		window.dispatchEvent(
			new CustomEvent(`lesson-${id}`, {
				detail: `Nội dung comment ${id}`,
			})
		);
	}, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
