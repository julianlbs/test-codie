import React from "react";
import styled from "styled-components";
import {
	StyledButton,
	StyledDivider,
	StyledGrid,
	StyledForm,
	StyledTextInput,
	StyledSelect,
	StyledVStack,
} from "@/modules/common/components";
import ButtonAddPokemon from "./ButtonAddPokemon";
import StyledOrderDetails from "./OrderDetails";
import {
	ContainerButtonAddPokemon,
	StyledDescription,
	StyledH2,
	StyledSectionTitle,
	ContainerSubmitOrder,
	StyledTotalPrice,
} from "./styles";
import { useScheduling } from "@/modules/features";

export interface StyledFormAgendamentoProps
	extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "type"> {}

function FormAgendamento(props: StyledFormAgendamentoProps) {
	const { ...otherProps } = props;
	const { regions } = useScheduling();

	return (
		<StyledForm {...otherProps}>
			<StyledH2>
				Preencha o formulário abaixo para agendar a sua consulta
			</StyledH2>

			<StyledGrid>
				<StyledTextInput label="Nome" placeholder="Digite o nome" />
				<StyledTextInput
					label="Sobrenome"
					placeholder="Digite o seu sobrenome"
				/>
				<StyledSelect name="Região" label="Região" defaultValue="">
					{/* TODO: Integrar com API */}
					<option value="" disabled>
						Selecione a sua região
					</option>
					{regions.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</StyledSelect>

				<StyledSelect name="Cidade" label="Cidade" defaultValue="">
					{/* TODO: Integrar com API */}
					<option value="" disabled>
						Selecione a sua cidade
					</option>
					<option value="Cidade 1">Cidade 1</option>
					<option value="Cidade 2">Cidade 2</option>
				</StyledSelect>
			</StyledGrid>

			<StyledVStack gap="0.4rem">
				<StyledSectionTitle>Cadastre seu time</StyledSectionTitle>
				<StyledDescription>Atendemos até 06 pokémons por vez</StyledDescription>
			</StyledVStack>
			<StyledGrid>
				<StyledSelect
					name="Pokemón"
					label="Pokemón"
					defaultValue=""
					direction="horizontal"
				>
					{/* TODO: Integrar com API */}
					<option value="" disabled>
						Selecione o pokémon
					</option>
					<option value="Pokemón 1">Pokemón 1</option>
					<option value="Pokemón 2">Pokemón 2</option>
				</StyledSelect>
			</StyledGrid>
			<ContainerButtonAddPokemon>
				<ButtonAddPokemon />
			</ContainerButtonAddPokemon>

			<StyledGrid>
				<StyledSelect name="Data" defaultValue="" label="Data para Atendimento">
					<option value="" disabled>
						Selecione uma data
					</option>
					{/* {dates?.map((date) => (
						<option key={date} value={date}>
							{date}
						</option>
					))} */}
				</StyledSelect>

				<StyledSelect
					name="Horário"
					defaultValue=""
					label="Horário de Atendimento"
				>
					<option value="" disabled>
						Selecione um horário
					</option>
				</StyledSelect>
			</StyledGrid>

			<StyledDivider />

			<StyledOrderDetails />

			<ContainerSubmitOrder>
				<StyledTotalPrice>Valor Total R$ 72,10</StyledTotalPrice>
				<StyledButton>Concluir Agendamento</StyledButton>
			</ContainerSubmitOrder>
		</StyledForm>
	);
}

const StyledFormAgendamento = styled(
	FormAgendamento
)<StyledFormAgendamentoProps>`
	margin-left: auto;
	margin-right: auto;
	gap: 3rem;

	@media screen and (min-width: 1440px) {
		max-width: 1600px;
	}
`;

export default StyledFormAgendamento;
