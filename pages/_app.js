import { useStore } from "@/store";

import { Provider } from "react-redux";
import "@/styles/main.scss";

function App({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState);
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default App;
