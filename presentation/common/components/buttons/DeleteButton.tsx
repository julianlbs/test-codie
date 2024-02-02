import React from "react";
import { default as Button } from "./Button";
import type { StyledButtonProps } from "./Button";
import { TrashIcon } from "../_index";
import styled from "styled-components";

const StyledButton = styled(Button)`
	border: none;
	padding: 0.4rem;

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export default function DeleteButton(props: StyledButtonProps) {
	return (
		<StyledButton
			rightSection={<TrashIcon fill="red" width={16} height={16} />}
			variant="outline"
			{...props}
		/>
	);
}
