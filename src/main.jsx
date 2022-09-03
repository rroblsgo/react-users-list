import ReactDOM from 'react-dom';
import './index.css';

const app = (
	<div>
		<h1 className='logo'>LearnThis</h1>
		<img src='/vite.svg' />
	</div>
);

const container = document.getElementById('root');

ReactDOM.render(app, container);
