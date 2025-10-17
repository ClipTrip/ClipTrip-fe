import { useEffect, useState } from 'react';

const useGoogleTranslate = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  const changeLanguage = (lang: string): void => {
    if (!isInitialized) return;

    const googleTranslateSelect =
      document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (googleTranslateSelect) {
      googleTranslateSelect.value = lang;
      googleTranslateSelect.dispatchEvent(new Event('change'));
    }
  };

  useEffect(() => {
    if (
      document.getElementById('google-translate-script')
      || window.google?.translate
    ) {
      const intervalId = setInterval(() => {
        if (document.querySelector('.goog-te-combo')) {
          setIsInitialized(true);
          clearInterval(intervalId);
        }
      }, 200);
      return;
    }

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'ko', autoDisplay: false },
          'google_translate_element'
        );
        setTimeout(() => setIsInitialized(true), 1000);
      }
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const translateInitial = () => {
      const storedLang = localStorage.getItem('language') || 'ko';
      changeLanguage(storedLang);
    };

    const handleLanguageChange = () => {
      translateInitial();
    };

    translateInitial();

    window.addEventListener('languageChange', handleLanguageChange);

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, [isInitialized]);
};

export default useGoogleTranslate;
