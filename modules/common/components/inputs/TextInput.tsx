import React from "react";
import styled from "styled-components";
import { StyledLabel } from "@/modules/common/components";
import { inputStyle } from "./styles/_index";

export interface StyledTextInputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
	label?: string;
	direction?: "horizontal" | "vertical";
}

const Wrapper = styled.div<StyledTextInputProps>`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;

	${(props) =>
		props.direction === "horizontal"
			? {
					flexDirection: "row",
					justifyContent: "center",
			  }
			: null}
`;

function TextInput(props: StyledTextInputProps) {
	const { label, direction, ...otherProps } = props;

	return (
		<Wrapper direction={direction}>
			{label ? <StyledLabel htmlFor={label}>{label}</StyledLabel> : null}
			<input id={label} type="text" {...otherProps} />
		</Wrapper>
	);
}

const StyledInput = styled(TextInput)<StyledTextInputProps>`
	${inputStyle}
`;

export default StyledInput;
