import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@/infra/constants/theme";
import { GlobalStyle } from "@/modules/styles";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
