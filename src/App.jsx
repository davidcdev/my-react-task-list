import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Menu } from './components/Menu';

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Tasks = lazy(() => import("./pages/Tasks"));
  const AboutUs = lazy(() => import("./pages/AboutUs"));
  /* const NotFound = lazy(() => import("./pages/NotFound")); */
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Suspense >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="*" element={<h1>Error 404</h1>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
