import React from "react";

function OpenInBrowserButton() {
  const handleClick = () => {
    // Apri una pagina di redirect intermedia
    window.location.href = "https://www.alessandrocoretti.com/redirect";
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
      Visita il mio sito
    </button>
  );
}

export default OpenInBrowserButton;
