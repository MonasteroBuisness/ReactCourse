import ReactDOM from 'react-dom/client'
import HomePage from './HomePage';

const mount = (el: Element) : void => {

    const root : ReactDOM.Root = ReactDOM.createRoot(el);
    root.render(<HomePage />)
}

export default mount;