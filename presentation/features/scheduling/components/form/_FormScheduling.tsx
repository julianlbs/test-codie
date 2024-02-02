import {
	type FormHTMLAttributes,
	type ChangeEvent,
	useEffect,
	useState,
} from "react";
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
	StyledError,
} from "@/presentation/common/components/_index";
import ButtonAddPokemon from "./ButtonAddPokemon";
import StyledOrderDetails from "./OrderDetails";
import {
	ContainerButtonAddPokemon,
	StyledDescription,
	StyledH2,
	StyledSectionTitle,
	ContainerSubmitOrder,
	StyledTotalPrice,
	StyledLoadingOverlay,
} from "./styles";
import { useScheduling } from "@/presentation/features/_index";
import { useForm } from "react-hook-form";
import { formatCityName } from "../../utils";
import {
	capitalizeText,
	formatCurrencyToBRL,
} from "@/presentation/common/utils/_index";
import type { Schedule } from "@domain";
import { schedulingSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import StyledSchedulingSucess from "./SchedulingSuccess";
import StyleSchedulingError from "./SchedulingError";
import { ToastContainer, toast } from "react-toastify";

export interface StyledFormSchedulingProps
	extends Omit<FormHTMLAttributes<HTMLFormElement>, "type"> {
	regions: string[];
	dates: string[];
}

function FormScheduling(props: StyledFormSchedulingProps) {
	const { regions, dates, ...otherProps } = props;
	const router = useRouter();
	const [shownContent, setShownContent] = useState<
		"create" | "success" | "error"
	>("create");
	const {
		cities,
		citiesQuery,
		pokemonsQuery,
		timeList,
		timeQuery,
		createScheduling,
	} = useScheduling();

	const {
		register,
		watch,
		formState: { errors },
		setValue,
		getValues,
		handleSubmit,
		clearErrors,
		reset,
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

	const errorSelectPokemon = (index: number) => {
		if (!Array.isArray(errors.pokemons)) return undefined;
		const message = errors.pokemons[index]?.message;
		return message;
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

	const handleSubmitSchedule = async (payload: Schedule) => {
		const res = await createScheduling.mutateAsync(payload);

		switch (res.status) {
			case 200:
				router.push(`${router.pathname}?submit=success`);
				setShownContent("success");
				break;
			default:
				router.push(`${router.pathname}?submit=error`);
				setShownContent("error");
		}
	};

	useEffect(() => {
		pokemonsQuery.refetch();
	}, []);

	useEffect(() => {
		if (!router.query["submit"]) {
			reset();
			setShownContent("create");
		}
	}, [router.query]);

	useEffect(() => {
		if (!cities.data || !pokemonsQuery.data?.data || !timeList.data) {
			toast.error("Ocorreu um erro ao carregar os dados");
		}
	}, [cities, pokemonsQuery.data?.data, timeList.data]);

	/* ----------------------------- RENDER CONTENT ----------------------------- */

	if (shownContent === "success") {
		return (
			<StyledSchedulingSucess
				date={getValues("date")}
				pokemonQuantity={getValues("pokemons").length ?? 0}
				time={getValues("time")}
			/>
		);
	}

	if (shownContent === "error") {
		return (
			<StyleSchedulingError message={createScheduling.data?.statusText ?? ""} />
		);
	}

	return (
		<StyledLoadingOverlay
			active={createScheduling.isPending}
			spinner
			text="Carregando..."
		>
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
						{(cities.data ?? []).map((name) => (
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
					<StyledDescription>
						Atendemos até 06 pokémons por vez
					</StyledDescription>
					{(errors?.pokemons ?? {})["message"] ? (
						<StyledError>{errors.pokemons?.message}</StyledError>
					) : null}
				</StyledVStack>
				<StyledGrid>
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
								{(pokemonsQuery.data?.data?.results ?? [])
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
						disabled={watch("date") === ""}
					>
						<option value="" disabled>
							Selecione um horário
						</option>
						{(timeList.data ?? [])?.map((time) => (
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
				<ToastContainer theme="colored" position="bottom-right" />
			</StyledForm>
		</StyledLoadingOverlay>
	);
}

const StyledFormScheduling = styled(FormScheduling)<StyledFormSchedulingProps>`
	margin-left: auto;
	margin-right: auto;
	gap: 3rem;

	@media screen and (min-width: 1440px) {
		max-width: 1600px;
	}
`;

export default StyledFormScheduling;
