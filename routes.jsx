import Contact from "./src/pages/Contact/Contact";
import HomePage from "./src/pages/HomePage/HomePage";
import Portfolio from "./src/pages/Portfolio/Portfolio";
import About from "./src/pages/About/About";

let routers = [
  { path: "/", element: <HomePage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/about", element: <About /> },
];

export default routers;
