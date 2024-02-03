import React, { useEffect, useState } from "react";
import { MainLayout } from "@/presentation/layouts/_index";
import {
	type StyledBreadCrumbsProps,
	Head,
	StyledHeader,
} from "@presentation/common/components";
import styled from "styled-components";
import { FormScheduling } from "@presentation/features";
import container from "@/inversify.config";
import { SchedulingUseCase } from "@domain";
import { INVERSIFY_TYPES } from "@/infra/constants/inversify";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ToastContainer, toast } from "react-toastify";
import type { IResponse } from "@data";

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
	const [error] = useState(!regions.data || !dates.data);

	useEffect(() => {
		if (error) {
			toast.error("Ocorreu um erro ao carregar os dados", {});
		}
	}, [error]);
	return (
		<MainLayout head={head}>
			<StyledHeader
				title="Agendar Consulta"
				subtitle="Recupere seus pokémons em 5 segundos."
				breadCrumbs={breadCrumbs}
			/>
			<StyledContainer>
				{!error ? (
					<FormScheduling
						regions={regions.data as string[]}
						dates={dates.data as string[]}
					/>
				) : null}
			</StyledContainer>
			<ToastContainer position="bottom-right" theme="colored" />
		</MainLayout>
	);
}

export const getServerSideProps = (async () => {
	const schedulingUseCase = container.get<SchedulingUseCase>(
		INVERSIFY_TYPES.SchedulingUseCase
	);
	const [regions, dates] = await Promise.all([
		schedulingUseCase.getRegions(),
		schedulingUseCase.getDates(),
	]);

	return { props: { regions, dates } };
}) satisfies GetServerSideProps<{
	regions: IResponse<string[]>;
	dates: IResponse<string[]>;
}>;
