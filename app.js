import ReactDOM from "react-dom/client";
import Header from "./src/components/header-comp/Header";
import Body from "./src/components/body-comp/Body";
import Footer from "./src/components/footer-comp/Footer";
import "/app.css";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
