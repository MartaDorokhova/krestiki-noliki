import { FieldComponent } from './components/field/Field';
import { InformationLayout } from './components/information/InformationLayout';

export const App = () => {
	return (
		<div>
			<div>
				<InformationLayout />
			</div>
			<div>
				<FieldComponent />
			</div>
		</div>
	);
};
