import React, { type ReactNode } from "react";
import styled from "styled-components";

interface NavRootProps {
	children: ReactNode;
}

const Wrapper = styled.header`
	width: 100%;
	padding: 1em 2em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default function NavRoot(props: NavRootProps) {
	const { children } = props;

	return <Wrapper>{children}</Wrapper>;
}
