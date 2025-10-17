import { RouterProvider } from 'react-router-dom';
import router from '@/routes/routes';
import useGoogleTranslate from '@/hooks/useTranslate';

function App() {
  useGoogleTranslate();
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
