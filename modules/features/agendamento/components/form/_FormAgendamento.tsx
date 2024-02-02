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
	StyledRequired,
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
import { schedulingSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";

export interface StyledFormAgendamentoProps
	extends Omit<FormHTMLAttributes<HTMLFormElement>, "type"> {
	regions: string[];
	dates: string[];
}

function FormAgendamento(props: StyledFormAgendamentoProps) {
	const { regions, dates, ...otherProps } = props;
	const { cities, citiesQuery, pokemonsQuery, timeList, timeQuery } =
		useScheduling();

	const {
		register,
		watch,
		formState: { errors },
		setValue,
		getValues,
		handleSubmit,
		clearErrors,
	} = useForm<Schedule>({
		resolver: yupResolver(schedulingSchema),
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
		clearErrors("region");
	};

	const handleSelectPokemon = (
		e: ChangeEvent<HTMLSelectElement>,
		index: number
	) => {
		const list = getValues("pokemons");
		list[index] = e.target.value;
		setValue("pokemons", list);
		clearErrors("pokemons");
	};

	const handleAddPokemon = () => {
		const list = getValues("pokemons");
		setValue("pokemons", list.concat(""));
		handleUpdatePrice();
		clearErrors("pokemons");
	};

	const handleDeletePokemon = (index: number) => {
		const list = getValues("pokemons");
		list.splice(index, 1);
		setValue("pokemons", list);
		handleUpdatePrice();
		clearErrors("pokemons");
	};

	const handleSelectDate = (e: ChangeEvent<HTMLSelectElement>) => {
		timeQuery.mutateAsync(e.target.value);
		setValue("date", e.target.value);
		clearErrors("date");
	};

	const handleUpdatePrice = () => {
		const pokemons = getValues("pokemons");
		const price = getValues("price");
		const subTotal = pokemons.length * price.pricePerPokemon;
		const total = +(subTotal * (1 + price.taxPercentage)).toFixed(2);
		setValue("price", { ...price, subTotal, total });
	};

	const handleSubmitSchedule = (payload: Schedule) => {
		console.log(payload);
	};

	const errorSelectPokemon = (index: number) => {
		if (!Array.isArray(errors.pokemons)) return undefined;
		const message = errors.pokemons[index]?.message;
		console.log(message);
		return message;
	};

	useEffect(() => {
		pokemonsQuery.refetch();
	}, []);

	return (
		<StyledForm onSubmit={handleSubmit(handleSubmitSchedule)} {...otherProps}>
			<StyledH2>
				Preencha o formulário abaixo para agendar a sua consulta
			</StyledH2>

			<StyledGrid>
				<StyledTextInput
					label="Nome"
					placeholder="Digite o nome"
					{...register("name")}
					required
					error={errors.name?.message}
				/>
				<StyledTextInput
					label="Sobrenome"
					placeholder="Digite o seu sobrenome"
					{...register("surName")}
					required
					error={errors.surName?.message}
				/>
				<StyledSelect
					label="Região"
					defaultValue=""
					{...register("region")}
					onChange={handleSelectRegion}
					required
					error={errors.region?.message}
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
					required
					error={errors.city?.message}
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
				<StyledSectionTitle>
					Cadastre seu time <StyledRequired>*</StyledRequired>
				</StyledSectionTitle>
				<StyledDescription>Atendemos até 06 pokémons por vez</StyledDescription>
				{/* {(errors?.pokemons ?? {})["message"] ? (
					<StyledError>{errors.pokemons?.message}</StyledError>
				) : null} */}
			</StyledVStack>
			<StyledGrid>
				{/* TODO: Make field searchable */}
				{watch("pokemons")?.map((name, index) => (
					<StyledHStack key={name + index}>
						<DeleteButton onClick={() => handleDeletePokemon(index)} />
						<StyledSelect
							name={name + index}
							label={`Pokemón ${index + 1}`}
							defaultValue={name}
							direction="horizontal"
							onChange={(e) => handleSelectPokemon(e, index)}
							error={errorSelectPokemon(index)}
						>
							<option value="" disabled>
								Selecione um pokémon
							</option>
							{name !== "" ? (
								<option value={name}>
									{capitalizeText(name) ?? "Selecione um pokémon"}
								</option>
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
					required
					error={errors.date?.message}
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
					required
					error={errors.time?.message}
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
				<StyledButton type="submit">Concluir Agendamento</StyledButton>
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
