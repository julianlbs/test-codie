import React from "react";
import styled, { keyframes } from "styled-components";
import { WhitePokeball } from "@/modules/common/components";

export interface StyledBrandLogoProps
	extends React.HTMLAttributes<HTMLDivElement> {}

// TODO: Improve animation behaviour (it should finish the animation on hover)
const hideName = keyframes`
  from {
    opacity: 1;
		width: 180px;
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
		width: 180px;
  }
`;

const LogoWrapper = styled.div`
	padding: 7px 8px;
`;

function BrandLogo(props: StyledBrandLogoProps) {
	return (
		<div {...props}>
			<LogoWrapper>
				<WhitePokeball />
			</LogoWrapper>
			<Name>Centro Pokémon</Name>
		</div>
	);
}

const StyledBrandLogo = styled(BrandLogo)<StyledBrandLogoProps>`
	width: min-content;
	height: 53px;
	border-radius: 50px;
	background-color: ${(props) => props.theme.colors.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	cursor: pointer;
`;

const Name = styled.p`
	font-size: 20px;
	font-weight: 600;
	color: white;
	width: 180px;
	animation: ${hideName} 0.6s ease-out forwards;
	animation-delay: 2s;
	transition: width 0.6s ease-out;
	-webkit-transition: width 0.6s ease-out;
	white-space: nowrap;
	${StyledBrandLogo}:hover & {
		animation: ${showName} 0.6s ease-out forwards;
		width: 180px;
		transition-delay: 0s;
	}
`;

export default StyledBrandLogo;
