import React, { type ReactNode } from "react";
import styled from "styled-components";

interface FooterProps {
	children: ReactNode;
}

const Wrapper = styled.footer`
	padding: 1em 2em;
	background-color: #1d1d1d;
`;

function Footer(props: FooterProps) {
	const { children } = props;

	return <Wrapper>{children}</Wrapper>;
}

export default Footer;
