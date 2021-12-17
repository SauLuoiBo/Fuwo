import Layout from "./components/layout/Layout";
import LanddingPage from "./containers/landdingPage/LanddingPage";
import Theme from "./styles/Theme";

function App() {
  return (
    <Theme>
      <Layout>
        <LanddingPage />
      </Layout>
    </Theme>
  );
}

export default App;
