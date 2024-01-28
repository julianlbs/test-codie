import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Head from "@/components/layout/Head/Head";
import Header from "@/components/layout/Header/Header";
import { BreadCrumbsProps } from "@/components/ui/navigation/BreadCrumbs";

const head = (
	<Head
		title="Centro Pokémon - Quem somos"
		description="Cuidamos bem do seu pokémon, para ele cuidar bem de você"
	/>
);

const breadCrumbs: BreadCrumbsProps["items"] = [
	{ title: "Página Inicial", href: "/" },
	{ title: "Quem Somos", href: "/quem-somos" },
];

export default function QuemSomos() {
	return (
		<MainLayout head={head}>
			<Header
				title="Quem Somos"
				subtitle="A maior rede de tratamento pokémon"
				breadCrumbs={breadCrumbs}
			/>
			<main>
				<p>Quem Somos</p>
			</main>
		</MainLayout>
	);
}
