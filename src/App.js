import React from "react";
import "./App.css";
import TopMenu from "./Component/topmenu/TopMenu.js";
import Header from "./Component/header/Header.js";
import Content from "./Component/contents/Content.js";
import Footer from "./Component/footer/Footer.js";
function App() {
  return (
    <div className="_013">
      <TopMenu />
      <Header />
      <Content
        title="Hello everybody"
        position1="order-lg-2"
        img="img/01.jpg"
        content="Say Hi !!!!"
      />
      <Content title="Nice to meet you" img="img/02.jpg" content="Hello" />
      <Content
        title="Nice to meet you 222"
        position1="order-lg-2"
        img="img/03.jpg"
        content="Konichiwa !!"
      />
      <Footer />
    </div>
  );
}

export default App;
