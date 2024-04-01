import { useEffect, useRef } from 'react';
import mount from 'static_pages/PageNotFound'

const PageNotFoundRemote = () : JSX.Element => {

    const pnf = useRef<HTMLDivElement>(null);

    useEffect( () => {
        mount(pnf.current)
    } , [])


    return <div ref={pnf}></div>
}

export default PageNotFoundRemote;