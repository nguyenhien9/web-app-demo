import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LanguagesSelectPage,
  LaunchPage,
  SingleTourDetailPage,
  TourPage,
  AudioPage,
  TourDetailPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LaunchPage />} />
          <Route path="/langs" element={<LanguagesSelectPage />} />
          <Route path="/tours" element={<TourPage />} />
          <Route path="/tours/:id" element={<TourDetailPage />} />
          <Route path="/tours/:id/detail" element={<SingleTourDetailPage />} />
          <Route path="/:audioId" element={<AudioPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
