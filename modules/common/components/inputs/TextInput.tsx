import React from "react";
import styled from "styled-components";

export interface StyledTextInputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

function TextInput(props: StyledTextInputProps) {
	return <input type="text" {...props} />;
}

const StyledInput = styled(TextInput)<StyledTextInputProps>`
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;

	&:focus {
		outline: 1px solid ${(props) => props.theme.colors.primary};
	}
`;

export default StyledInput;
