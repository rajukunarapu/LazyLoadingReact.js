import { BrowserRouter, Routes,Route, Link } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Contact from "./Contact"
// import Login from "./Login"
import './App.css'
import { lazy,Suspense } from "react"

let Home= lazy(()=>import ("./Home"))
let About= lazy(()=>import ("./About"))
let Contact= lazy(()=>import ("./Contact"))
let Login= lazy(()=>import ("./Login"))
let SignIn= lazy(()=>import ("./Signin"))
let SignOut= lazy(()=>import ("./Signout"))

function Header(){
    return(
        <>
            <ul >
                <li ><Link to={"/"} >Home</Link></li>
                <li ><Link to={"/About"}>About</Link></li>
                <li ><Link to={"/Contact"}>Contact</Link></li>
                <li ><Link to={"/Login"}>Login</Link></li>
            </ul>
        </>
    )
}


function Routing(){
    return(
        <>
            <h1>Routing Component</h1>
            <Suspense fallback={<div>Loading ...</div>}>
                <BrowserRouter>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Home></Home>}/>
                        <Route path="/About" element={<About></About>}/>
                        <Route path="/Contact" element={<Contact></Contact>}/>
                        <Route path="/Login" element={<Login></Login>}>
                            <Route path="signIn" element={<SignIn></SignIn>}/>
                            <Route path="signOut" element={<SignOut></SignOut>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>
            
        </>

    )
}

export default Routing