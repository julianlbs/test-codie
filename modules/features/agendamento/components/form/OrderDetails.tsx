import { StyledHStack, StyledVStack } from "@/modules/common/components";
import { type HTMLAttributes } from "react";
import styled from "styled-components";
import { Price } from "@domain";
import { formatCurrencyToBRL } from "@/modules/common/utils";

export interface StyledOrderDetailsProps
	extends HTMLAttributes<HTMLDivElement> {
	price: Price;
	pokemonQuantity: number;
}

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
	const { price, pokemonQuantity, ...otherProps } = props;
	console.log(price);
	return (
		<StyledVStack {...otherProps}>
			<StyledDetailItem>
				<StyledText>Número de pokémons a serem atendidos</StyledText>
				<StyledText>{pokemonQuantity}</StyledText>
			</StyledDetailItem>

			<StyledDetailItem>
				<StyledText>Atendimento unitário por pokémon</StyledText>
				{/* TODO: Implementar valor */}
				<StyledText>{formatCurrencyToBRL(price.pricePerPokemon)}</StyledText>
			</StyledDetailItem>

			<StyledDetailItem>
				<StyledText>Subtotal</StyledText>
				{/* TODO: Implementar subtotal */}
				<StyledText>{formatCurrencyToBRL(price.subTotal)}</StyledText>
			</StyledDetailItem>

			<StyledDetailItem>
				<StyledText>Taxa geracional*</StyledText>
				{/* TODO: Implementar taxa */}
				<StyledText>
					{formatCurrencyToBRL(price.subTotal * price.taxPercentage)}
				</StyledText>
			</StyledDetailItem>

			<StyledTaxText>
				*adicionamos uma taxa de {price.taxPercentage * 100}%, multiplicado pelo
				número da geração mais alta do time, com limite de até 30%
			</StyledTaxText>
		</StyledVStack>
	);
}

const StyledOrderDetails = styled(OrderDetails)``;

export default StyledOrderDetails;
