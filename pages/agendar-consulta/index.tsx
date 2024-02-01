import React from "react";
import { MainLayout } from "@/modules/layouts/_index";
import {
	type StyledBreadCrumbsProps,
	Head,
	StyledHeader,
} from "@/modules/common/components";
import styled from "styled-components";
import { FormAgendamento } from "../../modules/features/_index";

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

export default function AgendarConsultaPage() {
	return (
		<MainLayout head={head}>
			<StyledHeader
				title="Agendar Consulta"
				subtitle="Recupere seus pokémons em 5 segundos."
				breadCrumbs={breadCrumbs}
			/>
			<StyledContainer>
				<FormAgendamento />
			</StyledContainer>
		</MainLayout>
	);
}
