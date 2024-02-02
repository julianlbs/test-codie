import styled from "styled-components";
import { Head, StyledH1 } from "@/presentation/common/components/_index";
import { MainLayout } from "@/presentation/layouts/_index";

const DarkOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.1);
`;

const Title = styled(StyledH1)`
	color: white;
	text-align: center;
	z-index: 10;
`;

const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	flex: 1;
	background-image: url("/images/pokemon-hero.jpg");
	position: relative;
`;

const head = (
	<Head
		title="Centro Pokémon - Página Inicial"
		description="Cuidamos bem do seu pokémon, para ele cuidar bem de você"
	/>
);

export default function HomePage() {
	return (
		<MainLayout head={head}>
			<Main>
				<Title>
					Cuidamos bem do seu pokémon, <br />
					para ele cuidar bem de você
				</Title>
				<DarkOverlay />
			</Main>
		</MainLayout>
	);
}
