type User = {id : number, name : string};
export type HomePageProps = {user : User}

const HomePage = (props: HomePageProps) : JSX.Element => {
    return <><h2>This is the home page</h2>
    {props.user.id !== 0 && <p>Welcome {props.user.name}</p>}
</>
}

export default HomePage;