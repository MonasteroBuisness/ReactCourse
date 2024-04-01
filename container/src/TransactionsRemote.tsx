import { useEffect, useRef, useState } from "react";
import  mount  from 'payments_list/Transactions';

const TransactionsRemote = () : JSX.Element => {

  const [serverUrl , setServerUrl] = useState<string>("https://payments.multicode.uk")

    const transactions = useRef<HTMLDivElement>(null);

    useEffect( () => {
      mount(transactions.current, {serverUrl : serverUrl});
    }, [])
  
    return  <div ref={transactions}></div>
}


export default TransactionsRemote;