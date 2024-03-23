import * as React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Layout({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) {
  return (
    <>
      <Header />
      <Main path={path}>{children}</Main>
      <Footer />
    </>
  );
}
