import type { FC } from 'react';
import '@/styles/global.css';
import { Button } from './components/ui/Button';

export const App: FC = () => (
	<div>
		<h1>React Vite App</h1>
		<Button text="Click Me" onClick={() => alert('Button Clicked!')} />
	</div>
);
