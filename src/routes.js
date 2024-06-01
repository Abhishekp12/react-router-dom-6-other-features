import {
    Routes,
    Route,
    createBrowserRouter,
    // createRoutesFromElements
  } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Pagenotfound from './components/Pagenotfound/Pagenotfound';


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      errorElement: <Pagenotfound />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About/>,
        },
        {
          path: "contact",
          element: <Contact/>,
        },
        {
          path:"*",
          elemnt:<Pagenotfound/>
        }
      ]
    }
    
  ]);


//   2nd way
//   export const router = createBrowserRouter(
//     createRoutesFromElements(
//     <Routes path="/" element={<Layout/>}>
//         <Route path="home" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="*" element={<Pagenotfound />} />
//      </Routes>

//     )
//   )