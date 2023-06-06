import { useState } from 'react';
import { FieldComponent } from './Field';
import { InformationComponent } from './Information';
import './App.css';
import styles from './App.module.css';

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	return (
		<div className={styles.App}>
			<div>
				<InformationComponent
					isDraw={isDraw}
					isGameEnded={isGameEnded}
					currentPlayer={currentPlayer}
					field={field}
					setIsGameEnded={setIsGameEnded}
					setIsDraw={setIsDraw}
					setCurrentPlayer={setCurrentPlayer}
					setField={setField}
				/>
			</div>
			<div>
				<FieldComponent
					field={field}
					setField={setField}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					isGameEnded={isGameEnded}
				/>
			</div>
		</div>
	);
};
