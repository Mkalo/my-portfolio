import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';

type PortfolioLayoutProps = {
  children?: React.ReactNode;
};

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PortfolioLayout;
