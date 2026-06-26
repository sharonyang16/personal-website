import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
