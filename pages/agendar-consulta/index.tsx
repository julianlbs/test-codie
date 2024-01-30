import React from "react";
import { MainLayout } from "@/modules/layouts/_index";
import {
	type StyledBreadCrumbsProps,
	StyledH2 as H2,
	Head,
	StyledHeader,
	StyledTextInput,
} from "@/modules/common/components";
import styled from "styled-components";
import { FormAgendarConsulta } from "../../modules/pages/_index";

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

const Wrapper = styled.div`
	padding: 3rem 6rem;
	background-color: white;
`;

const StyledH2 = styled(H2)`
	font-size: 20px;
	text-align: center;
	font-weight: 600;
`;

export default function index() {
	return (
		<MainLayout head={head}>
			<StyledHeader
				title="Agendar Consulta"
				subtitle="Recupere seus pokémons em 5 segundos."
				breadCrumbs={breadCrumbs}
			/>
			<Wrapper>
				<StyledH2>
					Preencha o formulário abaixo para agendar a sua consulta
				</StyledH2>
				<FormAgendarConsulta>
					<StyledTextInput placeholder="Digite o Nome" />
				</FormAgendarConsulta>
			</Wrapper>
		</MainLayout>
	);
}
