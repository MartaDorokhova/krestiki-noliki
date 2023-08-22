import { FieldComponent } from './components/field/Field';
import { InformationLayout } from './components/information/InformationLayout';
import './App.css';
import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.App}>
			<div>
				<InformationLayout />
			</div>
			<div>
				<FieldComponent />
			</div>
		</div>
	);
};
