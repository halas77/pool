import { useEffect } from "react";

declare global {
  interface Window {
    google: any; // Adjust the type as per your usage or set it to 'any' if unsure
  }
}

const TranslateComponent = () => {
  useEffect(() => {
    function googleTranslateElementInit() {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,am",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    }

    if (window.google && window.google.translate) {
      googleTranslateElementInit();
    }
  }, []);
  return (
    <div
      id="google_translate_element"
      className="skiptranslate"
    ></div>
  );
};

export default TranslateComponent;
