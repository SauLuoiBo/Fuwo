import Layout from "./components/layout/Layout";
import { LanddingPage, History, Product } from "./containers";
import Theme from "./styles/Theme";

function App() {
  return (
    <Theme>
      <Layout>
        <LanddingPage />
        <History />
        <Product />
      </Layout>
    </Theme>
  );
}

export default App;
