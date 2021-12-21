import Layout from "./components/layout/Layout";
import {
  LanddingPage,
  History,
  Product,
  Introduce,
  Apply,
  KeyProduct,
} from "./containers";
import Theme from "./styles/Theme";

function App() {
  return (
    <Theme>
      <Layout>
        <LanddingPage />
        <History />
        <Product />
        <Introduce />
        <KeyProduct />
        <Apply />
      </Layout>
    </Theme>
  );
}

export default App;
