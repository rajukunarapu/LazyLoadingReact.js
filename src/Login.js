import { Link, Outlet } from "react-router-dom"

function Login(){
    return(
        <>
            <h1>Login Component</h1>

            <button><Link to={"signIn"}>SignIn</Link></button>
            <button><Link to={"signOut"}>SignOut</Link></button>
            <Outlet></Outlet>
            
        </>
    )
}

export default Login




