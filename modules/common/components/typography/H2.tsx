import React from "react";
import styled from "styled-components";

export interface StyledH2Props
	extends React.HTMLAttributes<HTMLHeadingElement> {}

function H2(props: StyledH2Props) {
	return <h2 {...props} />;
}

const StyledH2 = styled(H2)<StyledH2Props>`
	font-size: 26px;
	font-weight: 700;
`;

export default StyledH2;
