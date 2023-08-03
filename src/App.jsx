import { FieldComponent } from './components/field/Field';
import { InformationComponent } from './components/information/Information';
import './App.css';
import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.App}>
			<div>
				<InformationComponent />
			</div>
			<div>
				<FieldComponent />
			</div>
		</div>
	);
};
