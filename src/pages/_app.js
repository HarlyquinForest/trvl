import store from "../store";
import { Provider } from "react-redux";
import "../../public/styles/global.css";
import WindowSizeContext from "../common/features/WindowSize";
function MyApp({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <WindowSizeContext>
        <Component {...pageProps} />
      </WindowSizeContext>
    </Provider>
  );
}
export default MyApp;
