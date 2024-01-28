import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
	padding: 0.6em 2em;
	background-color: #1d1d1d;
`;

const Text = styled.p`
	font-size: 14px;
	color: white;
	text-align: center;
`;

export default function StyledFooter() {
	return (
		<Wrapper>
			<Text>
				Todas as marcas e ilustrações utilizadas são de seus respectivos donos.
			</Text>
		</Wrapper>
	);
}
