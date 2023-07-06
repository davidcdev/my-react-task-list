import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Navbar } from './components/Navbar';
import { ChakraProvider, Show, Hide } from '@chakra-ui/react';

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Tasks = lazy(() => import("./pages/Tasks"));
  const AboutUs = lazy(() => import("./pages/AboutUs"));
  /* const NotFound = lazy(() => import("./pages/NotFound")); */
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Hide breakpoint='(max-width: 820px)'>
            <Navbar />
          </Hide>
          <Suspense >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="*" element={<h1>Error 404</h1>} />
            </Routes>
          </Suspense>
          <Show breakpoint='(max-width: 820px)'>
            <Navbar />
          </Show>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
