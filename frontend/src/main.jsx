import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

//React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Page imports
import Home from './pages/Home';

//Router
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				//Error Page not found
				path: '*',
				element: <div>Error, Page not found</div>,
			},
		],
	},
]);

//Chakra UI
import { Provider } from './components/ui/provider';
import { system } from '../theme.js';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider theme={system}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
