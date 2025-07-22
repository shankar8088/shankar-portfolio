// This file is now unused and can be deleted.
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const pages = ["/", "/about", "/services", "/projects", "/skills", "/contact"];

export default function PageNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = pages.indexOf(location.pathname);

  const handleNext = () => {
    const nextPage = pages[currentIndex + 1];
    if (nextPage) navigate(nextPage);
  };

  const handleBack = () => {
    const prevPage = pages[currentIndex - 1];
    if (prevPage) navigate(prevPage);
  };

  return (
    <div className="fixed bottom-6 right-6 flex gap-3 z-50">
      {currentIndex > 0 && (
        <button
          onClick={handleBack}
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded shadow"
        >
          ← Back
        </button>
      )}
      {currentIndex < pages.length - 1 && (
        <button
          onClick={handleNext}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          Next →
        </button>
      )}
    </div>
  );
}
