import { StyledHStack, StyledVStack } from "@/modules/common/components";
import { type HTMLAttributes } from "react";
import styled from "styled-components";

export interface StyledOrderDetailsProps
	extends HTMLAttributes<HTMLDivElement> {}

const StyledDetailItem = styled(StyledHStack)`
	width: 100%;
	justify-content: space-between;
	width: 50%;

	@media screen and (max-width: 1024px) {
		width: 100%;
	}
`;

const StyledText = styled.p`
	color: #747474;
`;

const StyledTaxText = styled(StyledText)`
	color: #747474;
	font-size: 10px;
`;

function OrderDetails(props: StyledOrderDetailsProps) {
	return (
		<StyledVStack {...props}>
			<StyledDetailItem>
				<StyledText>Número de pokémons a serem atendidos</StyledText>
				{/* TODO: Implementar quantidade */}
				<StyledText>01</StyledText>
			</StyledDetailItem>

			<StyledDetailItem>
				<StyledText>Atendimento unitário por pokémon</StyledText>
				{/* TODO: Implementar valor */}
				<StyledText>R$ 70,00</StyledText>
			</StyledDetailItem>

			<StyledDetailItem>
				<StyledText>Subtotal</StyledText>
				{/* TODO: Implementar subtotal */}
				<StyledText>R$ 70,00</StyledText>
			</StyledDetailItem>

			<StyledDetailItem>
				<StyledText>Taxa geracional*</StyledText>
				{/* TODO: Implementar taxa */}
				<StyledText>R$ 2,10</StyledText>
			</StyledDetailItem>

			<StyledTaxText>
				*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
				alta do time, com limite de até 30%
			</StyledTaxText>
		</StyledVStack>
	);
}

const StyledOrderDetails = styled(OrderDetails)``;

export default StyledOrderDetails;
