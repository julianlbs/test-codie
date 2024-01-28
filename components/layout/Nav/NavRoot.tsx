import React, { type ReactNode } from "react";
import styled from "styled-components";

interface NavRootProps {
	children: ReactNode;
}

const Wrapper = styled.nav`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

export default function NavRoot(props: NavRootProps) {
	const { children } = props;
	return <Wrapper>{children}</Wrapper>;
}
