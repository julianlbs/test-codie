import React from "react";
import styled from "styled-components";

export interface StyledFooterProps extends React.HTMLAttributes<HTMLElement> {}

function Footer(props: StyledFooterProps) {
	return <div {...props} />;
}

const StyledFooter = styled(Footer)<StyledFooterProps>`
	padding: 1em 2em;
	background-color: #1d1d1d;
`;

export default StyledFooter;
