import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';
import './globals.css';

export default function RootLayout({ children }: {children: React.ReactElement}) {

  return (
    <html lang='ru'>
      <title>OWL top</title>
      <body>
        <Header />      
        <main>{children}</main>  
        <Footer />     
      </body>
    </html>
  );
}