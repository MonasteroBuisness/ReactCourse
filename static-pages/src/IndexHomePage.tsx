import ReactDOM from 'react-dom/client'
import HomePage, { HomePageProps } from './HomePage';

const mount = (el: Element, props : HomePageProps) : void => {

    const root : ReactDOM.Root = ReactDOM.createRoot(el);
    root.render(<HomePage {...props} />)
}

export default mount;