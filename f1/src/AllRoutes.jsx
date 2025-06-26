
import React from "react";
import {Navigate, Route, Routes,useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import ReturnPolicy from "./pages/ReturnPolicy";
import TermsConditions from "./pages/TermsConditions";
import FAQ from "./pages/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Livingroom from "./pages/livingroom";
import DiningRoom from "./pages/diningroom";
import OfficeRoom from "./pages/officeroom";
import BedRoom from "./pages/bedroom";
import Pay from "./pages/pay";

function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AppRoutes = () =>{
  const routes = [
    { path: "/Home", element:<Home/>},
    { path: "/About", element:<About/>},
    { path: "/ReturnPolicy", element:<ReturnPolicy/>},
    { path: "/TermsConditions", element:<TermsConditions/>},
    { path: "/FAQ", element:<FAQ/>},
    { path: "/Contact", element:<Contact/>},
    { path: "/Privacy", element:<Privacy/>},
    { path: "/Footer", element:<Footer/>},
    { path: "/Header", element:<Header/>},
    { path: "/livingroom", element:<Livingroom/>},
    { path: "/diningroom", element:<DiningRoom/> },
    { path: "/officeroom", element:<OfficeRoom/> },
    { path: "/bedroom", element:<BedRoom/> },
    { path: "/pay", element:<Pay/> },
  ];

  return (
    <>
    <ScrollToTop/>
    <Routes>
      {routes.map((route,index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to="/Home"/>}/>
    </Routes>
    </>
  );
};

export default AppRoutes;
