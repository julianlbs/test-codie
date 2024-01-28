import Head from "next/head";
import Header from "../components/layout/Header";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Centro Pokémon</title>
				<meta
					name="description"
					content="Cuidamos bem do seu pokémon, para ele cuidar bem de você"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
		</div>
	);
}
