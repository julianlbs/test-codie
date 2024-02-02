import React, { type HTMLAttributes } from "react";
import styled from "styled-components";
import { CheckIcon, StyledButton } from "@presentation/common/components";
import { useRouter } from "next/router";

interface StyledSchedulingSucessProps extends HTMLAttributes<HTMLDivElement> {
	date: string;
	time: string;
	pokemonQuantity: number;
}

const StyledTitle = styled.p`
	font-size: 24px;
	font-weight: 700;
`;

const StyledText = styled.p`
	color: rgba(0, 0, 0, 0.8);
`;

function SchedulingSuccess(props: StyledSchedulingSucessProps) {
	const { date, time, pokemonQuantity, ...otherProps } = props;
	const router = useRouter();

	const handleNewScheduling = () => {
		router.push("/agendar-consulta");
	};

	return (
		<div {...otherProps}>
			<StyledTitle>Consulta Agendada</StyledTitle>

			<CheckIcon width={44} height={44} color="#0FA4E4" />

			<StyledText>
				Seu agendamento para o dia {date}, às{" "}
				{time.replace(":", "h").concat("m")}, para {pokemonQuantity} pokémons
				foi realizado com sucesso!
			</StyledText>

			<StyledButton onClick={handleNewScheduling}>
				Fazer Novo Agendamento
			</StyledButton>
		</div>
	);
}

const StyledSchedulingSucess = styled(
	SchedulingSuccess
)<StyledSchedulingSucessProps>`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	margin-left: auto;
	margin-right: auto;
	border: 1px solid rgba(223, 134, 134, 60%);
	border-radius: 15px;
	padding: 3rem 2rem;
	width: 100%;

	@media screen and (min-width: 756px) {
		width: 500px;
	}
`;

export default StyledSchedulingSucess;
