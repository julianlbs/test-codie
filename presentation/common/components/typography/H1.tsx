import React from "react";
import styled from "styled-components";

export interface StyledH1Props
	extends React.HTMLAttributes<HTMLHeadingElement> {}

function H1(props: StyledH1Props) {
	return <h1 {...props} />;
}

const StyledH1 = styled(H1)<StyledH1Props>`
	font-size: 36px;
	font-weight: 700;
`;

export default StyledH1;
