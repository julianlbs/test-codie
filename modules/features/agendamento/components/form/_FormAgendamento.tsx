import { type FormHTMLAttributes, type ChangeEvent, useEffect } from "react";
import styled from "styled-components";
import {
	StyledButton,
	StyledDivider,
	StyledGrid,
	StyledForm,
	StyledTextInput,
	StyledSelect,
	StyledVStack,
	StyledHStack,
	DeleteButton,
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
import { useForm } from "react-hook-form";
import { formatCityName } from "../../utils";
import { capitalizeText, formatCurrencyToBRL } from "@/modules/common/utils";
import type { Schedule } from "@domain";

export interface StyledFormAgendamentoProps
	extends Omit<FormHTMLAttributes<HTMLFormElement>, "type"> {
	regions: string[];
	dates: string[];
}

function FormAgendamento(props: StyledFormAgendamentoProps) {
	const { regions, dates, ...otherProps } = props;
	const { cities, citiesQuery, pokemonsQuery, timeList, timeQuery } =
		useScheduling();

	const { register, watch, setValue, getValues } = useForm<Schedule>({
		defaultValues: {
			city: "",
			date: "",
			name: "",
			pokemons: [],
			price: {
				currency: "R$",
				pricePerPokemon: 70,
				taxPercentage: 0.03,
				subTotal: 0,
				total: 0,
			},
			region: "",
			surName: "",
			time: "",
		},
	});

	const handleSelectRegion = (e: ChangeEvent<HTMLSelectElement>) => {
		citiesQuery.mutateAsync(e.target.value);
		setValue("region", e.target.value);
	};

	const handleSelectPokemon = (
		e: ChangeEvent<HTMLSelectElement>,
		index: number
	) => {
		const list = getValues("pokemons");
		list[index] = e.target.value;
		setValue("pokemons", list);
	};

	const handleAddPokemon = () => {
		const list = getValues("pokemons");
		setValue("pokemons", list.concat(""));
		handleUpdatePrice();
	};

	const handleDeletePokemon = (index: number) => {
		const list = getValues("pokemons");
		list.splice(index, 1);
		setValue("pokemons", list);
		handleUpdatePrice();
	};

	const handleSelectDate = (e: ChangeEvent<HTMLSelectElement>) => {
		timeQuery.mutateAsync(e.target.value);
		setValue("date", e.target.value);
	};

	const handleUpdatePrice = () => {
		const pokemons = getValues("pokemons");
		const price = getValues("price");
		const subTotal = pokemons.length * price.pricePerPokemon;
		const total = subTotal * (1 + price.taxPercentage);
		setValue("price", { ...price, subTotal, total });
	};

	useEffect(() => {
		pokemonsQuery.refetch();
	}, []);

	return (
		<StyledForm {...otherProps}>
			<StyledH2>
				Preencha o formulário abaixo para agendar a sua consulta
			</StyledH2>

			<StyledGrid>
				<StyledTextInput
					label="Nome"
					placeholder="Digite o nome"
					{...register("name")}
				/>
				<StyledTextInput
					label="Sobrenome"
					placeholder="Digite o seu sobrenome"
					{...register("surName")}
				/>
				<StyledSelect
					label="Região"
					defaultValue=""
					{...register("region")}
					onChange={handleSelectRegion}
				>
					<option value="" disabled>
						Selecione a sua região
					</option>
					{regions.map((name) => (
						<option key={name} value={name}>
							{capitalizeText(name)}
						</option>
					))}
				</StyledSelect>

				<StyledSelect
					label="Cidade"
					defaultValue=""
					{...register("city")}
					disabled={watch("region") === ""}
				>
					<option value="" disabled>
						Selecione a sua cidade
					</option>
					{cities.map((name) => (
						<option key={name} value={name}>
							{formatCityName(name)}
						</option>
					))}
				</StyledSelect>
			</StyledGrid>

			<StyledVStack gap="0.4rem">
				<StyledSectionTitle>Cadastre seu time</StyledSectionTitle>
				<StyledDescription>Atendemos até 06 pokémons por vez</StyledDescription>
			</StyledVStack>
			<StyledGrid>
				{/* TODO: Make field searchable */}
				{watch("pokemons").map((name, index) => (
					<StyledHStack key={name + index}>
						<DeleteButton onClick={() => handleDeletePokemon(index)} />
						<StyledSelect
							label={`Pokemón ${index + 1}`}
							defaultValue={name}
							direction="horizontal"
							{...register("pokemons")}
							onChange={(e) => handleSelectPokemon(e, index)}
						>
							<option value="" disabled>
								Selecione o pokémon
							</option>
							{name !== "" ? (
								<option value={name}>{capitalizeText(name)}</option>
							) : null}
							{pokemonsQuery.data
								.filter((el) => el.name !== name)
								.map((pokemon) => (
									<option key={pokemon.name} value={pokemon.name}>
										{capitalizeText(pokemon.name)}
									</option>
								))}
						</StyledSelect>
					</StyledHStack>
				))}
			</StyledGrid>
			<ContainerButtonAddPokemon>
				<ButtonAddPokemon onClick={handleAddPokemon} />
			</ContainerButtonAddPokemon>

			<StyledGrid>
				<StyledSelect
					defaultValue=""
					label="Data para Atendimento"
					{...register("date")}
					onChange={handleSelectDate}
				>
					<option value="" disabled>
						Selecione uma data
					</option>
					{dates?.map((date) => (
						<option key={date} value={date}>
							{date}
						</option>
					))}
				</StyledSelect>

				<StyledSelect
					defaultValue=""
					label="Horário de Atendimento"
					{...register("time")}
				>
					<option value="" disabled>
						Selecione um horário
					</option>
					{timeList?.map((time) => (
						<option key={time} value={time}>
							{time}
						</option>
					))}
				</StyledSelect>
			</StyledGrid>

			<StyledDivider />

			<StyledOrderDetails
				price={watch("price")}
				pokemonQuantity={watch("pokemons").length}
			/>

			<ContainerSubmitOrder>
				<StyledTotalPrice>
					Valor Total {formatCurrencyToBRL(watch("price")?.total)}
				</StyledTotalPrice>
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
