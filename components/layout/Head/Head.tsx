import React, { type ReactNode } from "react";
import { default as NextHead } from "next/head";

interface HeadProps {
	children?: ReactNode;
	title: string;
	description: string;
	favicon?: string;
}

export default function Head(props: HeadProps) {
	const { children, title, description, favicon } = props;

	return (
		<NextHead>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="icon" href={favicon ?? "/favicon.ico"} />
			{children}
		</NextHead>
	);
}
