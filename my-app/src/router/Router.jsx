import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx';
import About from '../pages/About'; 
import Contact from "../pages/Contact.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "/about",
    element: <About />, 
  },
  {
    path: "/contact",
    element: <Contact />, 
  },
  
  
]);

export default Router;

