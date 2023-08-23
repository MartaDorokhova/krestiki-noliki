import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rendering = () => {
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
};
rendering();
store.subscribe(() => {
	rendering();
});
