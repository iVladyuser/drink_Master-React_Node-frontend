import { Header } from 'components/Header/Header';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <main>{children}</main>
      </main>
    </div>
  );
};
