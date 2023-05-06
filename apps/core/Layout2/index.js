import React from "react";
import Footer from "../../components/Footer";
import Header2 from "../../components/Header2";

function Layout2({ children }) {
  return (
    <div>
      {/* <!-- ============================ HEADER ========================= --> */}
      <Header2 />
      {children}
      {/* <!-- ========================== FOOTER ======================== --> */}
      <Footer />
    </div>
  );
}

export default Layout2;
