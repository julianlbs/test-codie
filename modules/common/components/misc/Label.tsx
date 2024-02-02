import React from "react";
import styled from "styled-components";

export interface StyledLabelProps
	extends React.LabelHTMLAttributes<HTMLLabelElement> {}

function Label(props: StyledLabelProps) {
	return <label {...props} />;
}

const StyledLabel = styled(Label)`
	white-space: nowrap;
	font-weight: 700;
	font-size: 12px;
`;

export default StyledLabel;
