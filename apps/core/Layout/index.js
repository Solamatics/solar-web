import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Layout({ children }) {
  return (
    <div>
      {/* <!-- ============================ HEADER ========================= --> */}
      <Header />
      {children}
      {/* <!-- ========================== FOOTER ======================== --> */}
      <Footer />
    </div>
  );
}

export default Layout;
