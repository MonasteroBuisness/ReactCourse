import Transactions from "./Transactions";
import ReactDOM from 'react-dom/client';

const mount = (el : Element) : void => {

    const root :ReactDOM.Root = ReactDOM.createRoot(el);
    root.render(<Transactions />);

}
export default mount;
