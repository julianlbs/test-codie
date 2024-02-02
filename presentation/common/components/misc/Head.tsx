import React from "react";
import { default as NextHead } from "next/head";

export interface HeadProps extends React.HTMLAttributes<HTMLHeadElement> {
	title: string;
	description: string;
	favicon?: string;
}

export default function Head(props: HeadProps) {
	const { title, description, favicon, ...otherProps } = props;

	const [pageUrl, setPageUrl] = React.useState("");

	React.useEffect(() => {
		setPageUrl(window.location.href);
	}, []);

	return (
		<NextHead {...otherProps}>
			<meta charSet="UTF-8" />
			<title>{title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="author" content="Julian Lima" />
			<meta name="description" content={description} />
			{/* TODO: Adicionar mais keywords */}
			<meta name="keywords" content="pokemon" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content="/images/white-pokeball.svg" />
			<meta property="og:url" content={pageUrl} />
			<link rel="icon" href={favicon ?? "/favicon.ico"} />
		</NextHead>
	);
}
