import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LanguagesSelectPage,
  LaunchPage,
  SingleTourDetailPage,
  TourPage,
  AudioPage,
  TourDetailPage,
} from "./pages";
import { Sidebar } from "./components";

function App() {
  <h1>Hello</h1>;
  return (
    <Suspense fallback="Loading...">
      <BrowserRouter>
        <div className="relative h-screen max-w-lg mx-auto">
          <Sidebar />
          <Routes>
            <Route path="/" element={<LaunchPage />} />
            <Route path="/langs" element={<LanguagesSelectPage />} />
            <Route path="/tours" element={<TourPage />} />
            <Route path="/tours/:id" element={<TourDetailPage />} />
            <Route
              path="/tours/:id/detail"
              element={<SingleTourDetailPage />}
            />
            <Route path="/:audioId" element={<AudioPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
