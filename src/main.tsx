import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './lib/i18n';
import I18nProvider from '@/providers/I18nProvider.tsx';
import { Toaster } from '@/components/ui/sonner.tsx';
import { Analytics } from '@vercel/analytics/react';

async function prepareApp() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser');

    return worker.start({
      onUnhandledRequest: 'bypass',
    });
  }

  return Promise.resolve();
}

const queryClient = new QueryClient();
prepareApp().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <I18nProvider>
          <App />
          <Toaster />
        </I18nProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <Analytics />
      </QueryClientProvider>
    </StrictMode>
  );
});
