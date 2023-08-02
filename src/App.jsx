import { FieldComponent } from './components/field/Field';
import { InformationComponent } from './components/information/Information';
import './App.css';
import styles from './App.module.css';
import { store } from './store.js';
import { useEffect } from 'react';

export const App = () => {
	const { currentPlayer, field, isDraw, isGameEnded } = store.getState();
	useEffect(() => {
		console.log(store.getState());
	}, [store.dispatch]);
	return (
		<div className={styles.App}>
			<div>
				<InformationComponent
					isDraw={isDraw}
					isGameEnded={isGameEnded}
					field={field}
					currentPlayer={currentPlayer}
				/>
			</div>
			<div>
				<FieldComponent
					field={field}
					currentPlayer={currentPlayer}
					isGameEnded={isGameEnded}
				/>
			</div>
		</div>
	);
};
