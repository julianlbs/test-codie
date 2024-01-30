import styled, { css } from "styled-components";
import React from "react";
export interface StyledButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "unstyled";
}

function Button(props: StyledButtonProps) {
	return <button type="button" {...props} />;
}

const StyledButton = styled(Button)<StyledButtonProps>`
	color: white;
	font-weight: bold;
	font-size: 14px;
	padding: 12px 24px;
	border-radius: 30px;
	border: none;
	cursor: pointer;
	transition: all 0.3s;

	:active {
		transform: scale(0.98);
	}

	${(props) => {
		switch (props.variant) {
			case "primary":
				return css`
					background-color: ${(props) => props.theme.colors.primary};
				`;
			case "unstyled":
				return css`
					background-color: transparent;
					color: black;
					font-weight: 400;
					padding: 0;
				`;
			default:
				return css`
					background-color: ${(props) => props.theme.colors.primary};
				`;
		}
	}}
`;

export default StyledButton;
