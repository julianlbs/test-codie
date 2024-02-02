import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

type StyledRequiredProps = HTMLAttributes<HTMLSpanElement> & {
	disabled?: boolean;
};

export const inputStyle = css<{
	error?: string;
	disabled?: boolean;
}>`
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;

	&:focus {
		outline: 1px solid ${(props) => props.theme.colors.secondary};
	}

	${(props) =>
		props.disabled
			? {
					border: "1px solid rgba(0, 0, 0, 0.1)",
					color: "gray",
			  }
			: null}

	${(props) =>
		props.error
			? {
					border: "1px solid rgba(255, 0, 0, 0.6)",
					color: "red",
			  }
			: null}
`;

export const StyledRequired = styled.span<StyledRequiredProps>`
	color: red;

	${(props) =>
		props.disabled
			? {
					color: "rgba(0, 0, 0, 0.4)",
			  }
			: null}
`;

export const StyledError = styled.p`
	color: red;
	font-size: 10px;
`;
