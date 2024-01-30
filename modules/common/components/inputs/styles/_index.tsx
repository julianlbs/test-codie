import { css } from "styled-components";

export const inputStyle = css`
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;

	&:focus {
		outline: 1px solid ${(props) => props.theme.colors.secondary};
	}
`;
