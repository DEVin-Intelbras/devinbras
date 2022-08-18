import './assets/css/app.css';

import { Header, Footer } from '@/components';
import { Products } from '@/pages';

export function App() {
  return (
    <div className='app'>
      <Header />

      <main className='main'>
        <Products />
      </main>

      <Footer />
    </div>
  );
}
