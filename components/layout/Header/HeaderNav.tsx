import React, { type ReactNode } from "react";
import styled from "styled-components";

interface HeaderNavProps {
	children: ReactNode;
}

const Wrapper = styled.nav`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

export default function HeaderNav(props: HeaderNavProps) {
	const { children } = props;
	return <Wrapper>{children}</Wrapper>;
}
