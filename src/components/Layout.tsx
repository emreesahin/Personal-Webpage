import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="area">
        <ul className="circles">
          <Header />
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <main>
            <div>{children}</div>
          </main>
          <Footer />
        </ul>
      </div>
    </>
  );
};
export default Layout;
