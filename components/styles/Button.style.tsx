import styled, { ThemeProps, css } from "styled-components";
import React, { type ReactNode } from "react";

interface StyledButtonProps {
	children?: ReactNode;
	$variant?: "primary" | "unstyled";
}

const Button = styled.button<Omit<StyledButtonProps, "children">>`
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
		switch (props.$variant) {
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

export default function StyledButton(props: StyledButtonProps) {
	const { children, ...otherProps } = props;

	return <Button {...otherProps}>{children}</Button>;
}
