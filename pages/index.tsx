import Head from "next/head";
import Header from "../components/layout/Header";
import styled from "styled-components";
import { H1 } from "../components/styles/H1.style";

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	height: 100%;
	flex: 1;
	background-image: url("/images/pokemon-hero.jpg");
	position: relative;
`;

const DarkOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.1);
`;

const Title = styled(H1)`
	color: white;
	text-align: center;
	z-index: 10;
`;

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Centro Pokémon</title>
				<meta
					name="description"
					content="Cuidamos bem do seu pokémon, para ele cuidar bem de você"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Main>
				<Title>
					Cuidamos bem do seu pokémon, <br />
					para ele cuidar bem de você
				</Title>
				<DarkOverlay />
			</Main>
		</Container>
	);
}
