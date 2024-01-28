import React, { type ReactNode } from "react";
import styled from "styled-components";

interface HeaderRootProps {
	children: ReactNode;
}

const Wrapper = styled.div`
	width: 100%;
	padding: 1em 2em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default function HeaderRoot(props: HeaderRootProps) {
	const { children } = props;

	return <Wrapper>{children}</Wrapper>;
}
