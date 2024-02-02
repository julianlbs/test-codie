import React from "react";
import styled from "styled-components";

export interface StyledLabelProps
	extends React.LabelHTMLAttributes<HTMLLabelElement> {
	disabled?: boolean;
}

function Label(props: StyledLabelProps) {
	const { disabled, ...otherProps } = props;
	return <label {...otherProps} />;
}

const StyledLabel = styled(Label)`
	white-space: nowrap;
	font-weight: 700;
	font-size: 12px;

	${(props) =>
		props.disabled
			? {
					color: "rgba(0, 0, 0, 0.4)",
			  }
			: null}
`;

export default StyledLabel;
