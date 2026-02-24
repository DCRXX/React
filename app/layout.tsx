import { Metadata } from 'next'
import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';
import './globals.css';
import RouteInitializer from '@/RouteInitializer';



export default async function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {

  return (
    <html lang='ru'>
      <title>OWL top</title>
      <body>
        <RouteInitializer>
          <Header />
          <main>{children}</main>
          <Footer />
        </RouteInitializer>
      </body>
    </html>
  );
}