import type { AppProps } from 'next/app'
import '@/css/style.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
