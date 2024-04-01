type User = {id : number, name : string};
export type HomePageProps = {user : User, logout : () => void}

const HomePage = (props: HomePageProps) : JSX.Element => {
    return <><h2>This is the home page</h2>
    {props.user.id !== 0 && <p>Welcome {props.user.name}</p>}
    {props.user.id !== 0 && <button onClick={props.logout}>Logout</button>}
</>
}

export default HomePage;