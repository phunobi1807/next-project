import "bootstrap/dist/css/bootstrap.min.css";
import StandardLayout from "../layouts/Standard/StandardLayout";
function MyApp({ Component, pageProps }) {
  return (
    <StandardLayout>
      <Component {...pageProps} />
    </StandardLayout>
  );
}

export default MyApp;
