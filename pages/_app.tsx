import "reflect-metadata";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@/infra/constants/theme";
import { GlobalStyle } from "@/modules/styles";
import container from "@/inversify.config";
import { Provider } from "inversify-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 60 * 1000,
					},
				},
			})
	);

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<QueryClientProvider client={queryClient}>
					<Provider container={container}>
						<Component {...pageProps} />
					</Provider>
				</QueryClientProvider>
			</ThemeProvider>
		</>
	);
}
