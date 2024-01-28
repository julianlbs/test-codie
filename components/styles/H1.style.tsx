import styled from "styled-components";
import React, { type ReactNode } from "react";

interface StyledH1Props {
	children?: ReactNode;
}

export const H1 = styled.h1`
	font-size: 32;
	text-align: center;
	font-weight: 700;
`;

export default function StyledH1(props: StyledH1Props) {
	const { children } = props;

	return <H1>{children}</H1>;
}
