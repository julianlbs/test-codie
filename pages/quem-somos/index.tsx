import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Head from "@/components/layout/Head/Head";

const head = (
	<Head
		title="Centro Pokémon - Quem somos"
		description="Cuidamos bem do seu pokémon, para ele cuidar bem de você"
	/>
);

export default function QuemSomos() {
	return (
		<MainLayout head={head}>
			<main>
				<p>Quem Somos</p>
			</main>
		</MainLayout>
	);
}
