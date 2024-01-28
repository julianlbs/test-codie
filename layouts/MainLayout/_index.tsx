import React, { type ReactNode } from "react";
import styled from "styled-components";
import StyledBrandLogo from "@/components/ui/misc/BrandLogo";
import Header from "@/components/layout/Header/_index";
import Footer from "@/components/layout/Footer/_index";
import Nav from "@/components/layout/Nav/_index";

interface MainLayoutProps {
	children: ReactNode;
	head: ReactNode;
}

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

const FooterText = styled.p`
	font-size: 14px;
	color: white;
	text-align: center;
`;

export default function MainLayout(props: MainLayoutProps) {
	const { children, head } = props;

	return (
		<Container>
			{head}
			<Header.Root>
				<StyledBrandLogo />
				<Nav.Root>
					<Nav.ListItems />
				</Nav.Root>
			</Header.Root>
			{children}
			<Footer.Root>
				<FooterText>
					Todas as marcas e ilustrações utilizadas são de seus respectivos
					donos.
				</FooterText>
			</Footer.Root>
		</Container>
	);
}
