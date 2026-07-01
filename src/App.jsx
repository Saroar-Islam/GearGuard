import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import LearnMorePage from "./pages/LearnMorePage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    const headerBtnRef = useRef(null);

    return (
        <>
            <ScrollToTop />

            {/* Header always visible */}
            <Header ref={headerBtnRef} />

            <Routes>
                <Route path="/" element={<Home headerBtnRef={headerBtnRef} />} />
                <Route path="/learn-more" element={<LearnMorePage />} />
            </Routes>
        </>
    );
}

export default App;
