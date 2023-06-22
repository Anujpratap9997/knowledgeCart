// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function NavBar() {
//   return (
//     <header id="header" class="header d-flex align-items-center fixed-top sticked">
//     <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

//       <a href="index.html" class="logo d-flex align-items-center">
//         <img src="assets/img/logo.png" alt=""/>
//         <h1>Logis</h1>
//       </a>

//       <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
//       <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
//       <nav id="navbar" class="navbar">
//         <ul>
//           <li><Link to="/" class="active">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/service">Services</Link></li>
//           <li><Link to="/pricing">Pricing</Link></li>
//           <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
//             <ul>
//               <li><a href="#">Drop Down 1</a></li>
//               <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
//                 <ul>
//                   <li><a href="#">Deep Drop Down 1</a></li>
//                   <li><a href="#">Deep Drop Down 2</a></li>
//                   <li><a href="#">Deep Drop Down 3</a></li>
//                   <li><a href="#">Deep Drop Down 4</a></li>
//                   <li><a href="#">Deep Drop Down 5</a></li>
//                 </ul>
//               </li>
//               <li><a href="#">Drop Down 2</a></li>
//               <li><a href="#">Drop Down 3</a></li>
//               <li><a href="#">Drop Down 4</a></li>
//             </ul>
//           </li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><a class="get-a-quote" href="get-a-quote.html">Get a Quote</a></li>
//         </ul>
//       </nav>

//     </div>
//   </header>
//   )
// }


import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Navbar id="header" className="header d-flex align-items-center fixed-top sticked bg-dark mb-5" expand="xl">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <Link to="/" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt=""/>
          <h1>Coachshala</h1>
        </Link>

        <Navbar.Toggle aria-controls="navbar" className="mobile-nav-toggle mobile-nav-show bi bi-list" />
        <Navbar.Toggle aria-controls="navbar" className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        <Navbar.Collapse id="navbar" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="active text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/about"className="active text-white">Crash Course</Nav.Link>
            <Nav.Link as={Link} to="/service"className="active text-white">System Pushed</Nav.Link>
            <Nav.Link as={Link} to="/pricing"className="active text-white">Pricing</Nav.Link>
            {/* <NavDropdown title="Drop Down" id="dropdown" className="dropdown-indicator">
              <NavDropdown.Item as={Link} to="/dropdown1">Drop Down 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/deepdropdown" className="dropdown">
                <span>Deep Drop Down</span>
                <NavDropdown.Menu>
                  <NavDropdown.Item as={Link} to="/deepdropdown1">Deep Drop Down 1</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/deepdropdown2">Deep Drop Down 2</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/deepdropdown3">Deep Drop Down 3</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/deepdropdown4">Deep Drop Down 4</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/deepdropdown5">Deep Drop Down 5</NavDropdown.Item>
                </NavDropdown.Menu>
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dropdown2">Drop Down 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dropdown3">Drop Down 3</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dropdown4">Drop Down 4</NavDropdown.Item>
            </NavDropdown> */}
         
          <Nav.Link as={Link} to="/contact"className="active text-white">Contact</Nav.Link>
          {/* <Nav.Link href="get-a-quote.html" className="get-a-quote text-white">Get a Quote</Nav.Link> */}
          <Form inline>
            <FormControl type="text" placeholder="Search"  className="mr-2 ml-2" />
          </Form>
          </Nav>
        </Navbar.Collapse>

      </div>
    </Navbar>
  );
}
