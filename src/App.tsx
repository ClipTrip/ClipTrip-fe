import { RouterProvider } from 'react-router-dom';
import router from '@/routes/routes';
import useGoogleTranslate from '@/hooks/useTranslate';
import { useEffect } from 'react';
import i18n from '@/lib/i18n';

function App() {
  useGoogleTranslate();
  useEffect(() => {
    window.addEventListener('storage', (e) => {
      if (e.key === 'language' && e.newValue) {
        i18n.changeLanguage(e.newValue);
      }
    });
  });

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <div
        id='google_translate_element'
        style={{ display: 'none' }}
      ></div>
    </>
  );
}

export default App;
