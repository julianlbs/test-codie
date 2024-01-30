import React from "react";
import styled from "styled-components";
import { StyledLabel } from "@/modules/common/components";
import { inputStyle } from "./styles/_index";

export interface StyledSelectProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	direction?: "horizontal" | "vertical";
}

const Wrapper = styled.div<StyledSelectProps>`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	width: 100%;

	${(props) =>
		props.direction === "horizontal"
			? {
					flexDirection: "row",
					alignItems: "center",
					gap: "3rem",
			  }
			: null};
`;

function Select(props: StyledSelectProps) {
	const { label, direction, ...otherProps } = props;

	return (
		<Wrapper direction={direction}>
			{label ? <StyledLabel htmlFor={label}>{label}</StyledLabel> : null}
			<select id={label} {...otherProps} />
		</Wrapper>
	);
}

const StyledSelect = styled(Select)<StyledSelectProps>`
	${inputStyle}
	background-color: white;
`;

export default StyledSelect;
