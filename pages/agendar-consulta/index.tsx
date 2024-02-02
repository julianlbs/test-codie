import React from "react";
import { MainLayout } from "@/presentation/layouts/_index";
import {
	type StyledBreadCrumbsProps,
	Head,
	StyledHeader,
} from "@/presentation/common/components/_index";
import styled from "styled-components";
import {
	FormAgendamento,
	useScheduling,
} from "../../presentation/features/_index";
import container from "../../inversify.config";
import { SchedulingUseCase } from "../../domain/_index";
import { INVERSIFY_TYPES } from "../../infra/constants/inversify";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const head = (
	<Head
		title="Centro Pokémon - Agendar Consulta"
		description="Cuidamos bem do seu pokémon, para ele cuidar bem de você"
	/>
);

const breadCrumbs: StyledBreadCrumbsProps["items"] = [
	{ title: "Página Inicial", href: "/" },
	{ title: "Agendar Consulta", href: "/agendar-consulta" },
];

const StyledContainer = styled.div`
	padding: 3rem 6rem;
	flex: 1;

	@media screen and (max-width: 756px) {
		padding: 3rem 2rem;
	}
`;

export default function AgendarConsultaPage({
	regions,
	dates,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<MainLayout head={head}>
			<StyledHeader
				title="Agendar Consulta"
				subtitle="Recupere seus pokémons em 5 segundos."
				breadCrumbs={breadCrumbs}
			/>
			<StyledContainer>
				<FormAgendamento regions={regions} dates={dates} />
			</StyledContainer>
		</MainLayout>
	);
}

export const getServerSideProps = (async () => {
	const schedulingUseCase = container.get<SchedulingUseCase>(
		INVERSIFY_TYPES.SchedulingUseCase
	);
	const regions = await schedulingUseCase.getRegions();
	const dates = await schedulingUseCase.getDates();

	return { props: { regions, dates } };
}) satisfies GetServerSideProps<{ regions: string[]; dates: string[] }>;
