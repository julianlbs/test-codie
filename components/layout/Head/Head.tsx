import React, { type ReactNode } from "react";
import { default as NextHead } from "next/head";

interface HeadProps {
	children?: ReactNode;
	title: string;
	description: string;
	favicon?: string;
	pageUrl?: string;
}

export default function Head(props: HeadProps) {
	const { children, title, description, pageUrl, favicon } = props;

	return (
		<NextHead>
			<meta charSet="UTF-8" />
			<title>{title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="author" content="Julian Lima" />
			<meta name="description" content={description} />
			<meta name="keywords" content="pokemon, , keyword3" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content="/images/white-pokeball.svg" />
			<meta property="og:url" content={pageUrl} />

			<link rel="icon" href={favicon ?? "/favicon.ico"} />
			{children}
		</NextHead>
	);
}
