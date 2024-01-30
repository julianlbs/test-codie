import React from "react";
import styled from "styled-components";

export interface StyledH3Props
	extends React.HTMLAttributes<HTMLHeadingElement> {}

function H3(props: StyledH3Props) {
	return <h3 {...props} />;
}

const StyledH3 = styled(H3)<StyledH3Props>`
	font-size: 20px;
	font-weight: 400;
`;

export default StyledH3;
