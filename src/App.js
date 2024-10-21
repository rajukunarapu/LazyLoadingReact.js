// import "./App.css"
// import { lazy,Suspense, useState } from "react"
// import Routing from "./Routing"


// function App(){

//   let Form = lazy(()=>import ("./form"))
//   let[show,setShow] = useState(false)

//   return(
//     <>

//       <div className="text-center">

//         <h1 className="text-center mt-5 text-secondary">This is an App component</h1>

//         < button onClick={()=> {setShow(true)}} className = "btn btn-primary mt-3 " >Open</button>

//         {
//           show === true && <Suspense><Form></Form></Suspense>
//         }

//         <Routing></Routing>
//       </div>
      
//     </>
//   )
// }

// export default App

import Routing from "./Routing"
function App(){
  return(
    <>
      <Routing></Routing>
    </>
  )
}

export default App