import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

const useGoogleTranslate = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  const changeLanguage = useCallback(
    (lang: string): void => {
      if (!isInitialized) return;

      const googleTranslateSelect =
        document.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (googleTranslateSelect) {
        googleTranslateSelect.value = lang;
        googleTranslateSelect.dispatchEvent(new Event('change'));
      }
    },
    [isInitialized]
  );

  useEffect(() => {
    const initializeTranslator = () => {
      if (
        window.google
        && window.google.translate
        && !document.querySelector('.goog-te-combo')
      ) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'ko', autoDisplay: false },
          'google_translate_element'
        );
      }
    };

    if (
      document.getElementById('google-translate-script')
      || window.google?.translate
    ) {
      let attempts = 0;
      const maxAttempts = 50;
      initializeTranslator();
      const intervalId = setInterval(() => {
        attempts++;
        if (document.querySelector('.goog-te-combo')) {
          setIsInitialized(true);
          clearInterval(intervalId);
        } else if (attempts >= maxAttempts) {
          console.error('Google Translate initialization timed out');
          clearInterval(intervalId);
        }
      }, 200);
      return () => clearInterval(intervalId);
    }

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'ko', autoDisplay: false },
          'google_translate_element'
        );
        let attempts = 0;
        const maxAttempts = 50;
        const intervalId = window.setInterval(() => {
          attempts++;
          if (document.querySelector('.goog-te-combo')) {
            setIsInitialized(true);
            clearInterval(intervalId);
          } else if (attempts >= maxAttempts) {
            console.error('Google Translate initialization timed out');
            clearInterval(intervalId);
          }
        }, 200);
      }
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onerror = () => {
      toast.error('Failed to load Google Translate script');
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const translateInitial = () => {
      const storedLang = localStorage.getItem('language') || 'ko';
      changeLanguage(storedLang === 'zh' ? 'zh-CN' : storedLang);
    };

    const handleLanguageChange = () => {
      translateInitial();
    };

    const onStorage = (e: StorageEvent) => {
      if (e.key === 'language' && e.newValue)
        changeLanguage(e.newValue === 'zh' ? 'zh-CN' : e.newValue);
    };

    translateInitial();

    window.addEventListener('languageChange', handleLanguageChange);
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
      window.removeEventListener('storage', onStorage);
    };
  }, [isInitialized, changeLanguage]);
};

export default useGoogleTranslate;
