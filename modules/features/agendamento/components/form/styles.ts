import {
	StyledH2 as H2,
	StyledHStack,
} from "@/modules/common/components";
import styled from "styled-components";

export const StyledH2 = styled(H2)`
	font-size: 20px;
	text-align: center;
	font-weight: 600;
`;

export const StyledSectionTitle = styled.h3`
	font-size: 12px;
	font-weight: 700px;
`;

export const StyledDescription = styled.p`
	font-size: 12px;
	color: #747474;
`;

export const ContainerButtonAddPokemon = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerSubmitOrder = styled(StyledHStack)`
	justify-content: space-between;
	padding: 2rem 0;

	@media screen and (max-width: 756px) {
		flex-direction: column;
		align-items: flex-end;
	}
`;

export const StyledTotalPrice = styled.p`
	font-size: 24px;
	font-weight: 700;
	color: #1d1d1d;
`;