import Layout from "./components/layout/Layout";
import {
  LanddingPage,
  History,
  Product,
  Introduce,
  Apply,
  KeyProduct,
  Customize,
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
        <Customize />
      </Layout>
    </Theme>
  );
}

export default App;
