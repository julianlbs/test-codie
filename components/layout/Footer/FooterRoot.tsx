import React, { type ReactNode } from "react";
import styled from "styled-components";

interface FooterRootProps {
	children: ReactNode;
}

const Wrapper = styled.footer`
	padding: 0.6em 2em;
	background-color: #1d1d1d;
`;

function FooterRoot(props: FooterRootProps) {
	const { children } = props;

	return <Wrapper>{children}</Wrapper>;
}

export default FooterRoot;
