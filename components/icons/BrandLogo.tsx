import React from "react";
import styled, { keyframes } from "styled-components";
import WhitePokeball from "./WhitePokeball";

const hideName = keyframes`
  from {
    opacity: 1;
		width: 150px;
  }
  to {
    opacity: 0;
		width: 0;
  }
`;

const showName = keyframes`
	from {
		opacity: 0;
		width: 0;
	}
  to {
    opacity: 1;
		width: 150px;
  }
`;

const Wrapper = styled.div`
	width: min-content;
	height: 53px;
	border-radius: 50px;
	background-color: ${(props) => props.theme.colors.primary};
	display: flex;
	justify-items: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	cursor: pointer;
`;

const PokeballWrapper = styled.div`
	padding: 7px 8px;
`;

const Name = styled.p`
	fontsize: 20px;
	font-weight: 600;
	color: white;
	width: 150px;
	animation: ${hideName} 0.6s ease-out forwards;
	animation-delay: 2s;
	transition: width 0.6s ease-out;
	-webkit-transition: width 0.6s ease-out;
	white-space: nowrap;

	${Wrapper}:hover & {
		animation: ${showName} 0.6s ease-out forwards;
		width: 150px;
		transition-delay: 0s;
	}
`;

export default function BrandLogo() {
	return (
		<Wrapper>
			<PokeballWrapper>
				<WhitePokeball />
			</PokeballWrapper>
			<Name>Centro Pokémon</Name>
		</Wrapper>
	);
}
