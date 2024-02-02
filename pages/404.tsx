import React from "react";
import { MainLayout } from "@/presentation/layouts/_index";
import { Head } from "@/presentation/common/components/_index";
import styled from "styled-components";

const head = (
	<Head
		title="Centro Pokémon - Página não encontrada"
		description="Cuidamos bem do seu pokémon, para ele cuidar bem de você"
	/>
);

const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	position: relative;
`;

const Text = styled.p`
	font-size: 32px;
`;

export default function NotFoundPage() {
	return (
		<MainLayout head={head}>
			<Main>
				<Text>Página não encontrada</Text>
			</Main>
		</MainLayout>
	);
}
