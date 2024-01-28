import styled from "styled-components";
import { H1 } from "@/components/ui/typography/H1";
import MainLayout from "@/layouts/MainLayout/_index";
import Head from "@/components/layout/Head/Head";
import React from "react";

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

export default function Home() {
	const [pageUrl, setPageUrl] = React.useState("");

	const head = (
		<Head
			title="Centro Pokémon"
			description="Cuidamos bem do seu pokémon, para ele cuidar bem de você"
			pageUrl={pageUrl}
		/>
	);

	React.useEffect(() => {
		setPageUrl(window.location.href);
	}, []);

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
