import { useEffect, useRef } from 'react';
import mount from 'static_pages/HomePage'

const HomePageRemote = () : JSX.Element => {

    const homepage = useRef<HTMLDivElement>(null);

    useEffect( () => {
        mount(homepage.current)
    } , [])


    return <div ref={homepage}></div>
}

export default HomePageRemote;