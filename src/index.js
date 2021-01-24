import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";
import routes from "./router";
import "antd/dist/antd.css";
import "./style.css";
import { Layout } from "antd";
import Components from "./components";

const { Header, Footer, Content } = Layout;

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <Layout className="App">
      <Header className="header">
        <Components.Header />
      </Header>
      <Content className="content">{routeResult}</Content>
      <Footer className="footer">
        <Components.Footer />
      </Footer>
    </Layout>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
