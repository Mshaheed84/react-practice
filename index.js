 import React from "react"
 import React from "react-dom"
//ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))// (stuff to display, location)
//ReactDOM.render(<ul id="list-items"><li>This is the first list item</li><li>The second item</li></ul> , document.getElementById("list"))
// /ReactDOM.render(<li>This is the first list item</li>, document.getElementById("list-items"))
//ReactDOM.render(<li>The second item</li>, document.getElementById("list-items"))
// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// function MainContent(){
//     return (
//         <div>
//             <Navbar />
//         <h1>This is the main content</h1>
//         </div>
//     )
// }
// ReactDOM.render(<MainContent />, document.getElementById("root"))
var root = document.getElementById("root")
//var h1 = document.createElement("h1")
const page = (
    <nav>
        <h1>Brand Name</h1>
        <ul>
            <li>Menu</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
        <div>
            <h2>The world is yours</h2>
        </div>
    </nav>
)
//root.append(page)
//ReactDOM.render(page, root)