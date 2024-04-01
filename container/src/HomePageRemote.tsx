import { useEffect, useRef } from 'react';
import mount from 'static_pages/HomePage'
import { User } from './App';

type HomePageProps = {user : User}

const HomePageRemote = (props: HomePageProps) : JSX.Element => {

    const homepage = useRef<HTMLDivElement>(null);

    useEffect( () => {
        mount(homepage.current, props)
    } , [])


    return <div ref={homepage}></div>
}

export default HomePageRemote;