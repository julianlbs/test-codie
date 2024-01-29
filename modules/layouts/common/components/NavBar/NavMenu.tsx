import React, { type ReactNode } from "react";
import styled from "styled-components";

interface NavMenuProps {
	children: ReactNode;
}

const Wrapper = styled.nav`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

export default function NavMenu(props: NavMenuProps) {
	const { children } = props;
	return <Wrapper>{children}</Wrapper>;
}
