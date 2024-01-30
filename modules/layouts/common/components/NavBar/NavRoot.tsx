import React from "react";
import styled from "styled-components";

export interface StyledNavRootProps extends React.HTMLAttributes<HTMLElement> {}

function NavRoot(props: StyledNavRootProps) {
	return <nav {...props} />;
}

const StyledNavRoot = styled(NavRoot)<StyledNavRootProps>`
	width: 100%;
	padding: 1em 2em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default StyledNavRoot;
