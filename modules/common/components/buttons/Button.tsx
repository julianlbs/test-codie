import styled, { css } from "styled-components";
import { type ReactNode } from "react";
export interface StyledButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "unstyled" | "outline";
	leftSection?: ReactNode;
	rightSection?: ReactNode;
}

function Button(props: StyledButtonProps) {
	const {
		children,
		variant = "primary",
		leftSection,
		rightSection,
		...otherProps
	} = props;

	return (
		<button type="button" {...otherProps}>
			{leftSection}
			{children}
			{rightSection}
		</button>
	);
}

const StyledButton = styled(Button)<StyledButtonProps>`
	font-weight: bold;
	font-size: 14px;
	padding: 12px 24px;
	border-radius: 30px;
	border: none;
	cursor: pointer;
	transition: all 0.3s;
	display: flex;
	align-items: center;
	gap: 1rem;

	:active {
		transform: scale(0.98);
	}

	${(props) => {
		switch (props.variant) {
			case "primary":
				return css`
					background-color: ${(props) => props.theme.colors.primary};
					color: white;
				`;
			case "outline":
				return css`
					background-color: transparent;
					border: 1px solid rgba(0, 0, 0, 0.6);
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
					color: white;
				`;
		}
	}}
`;

export default StyledButton;
