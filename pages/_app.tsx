import "reflect-metadata";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@/infra/constants/theme";
import { GlobalStyle } from "@/modules/styles";
import container from "@/inversify.config";
import { Provider } from "inversify-react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Provider container={container}>
					<Component {...pageProps} />
				</Provider>
			</ThemeProvider>
		</>
	);
}
