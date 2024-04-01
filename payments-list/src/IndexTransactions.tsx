import Transactions, { TransactionsProps } from "./Transactions";
import ReactDOM from 'react-dom/client';

const mount = (el : Element, props: TransactionsProps) : void => {

    const root :ReactDOM.Root = ReactDOM.createRoot(el);
    root.render(<Transactions {...props} />);

}
export default mount;
