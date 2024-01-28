import React, { type ReactNode } from "react";
import styled from "styled-components";
import StyledBrandLogo from "@/components/ui/misc/BrandLogo";
import Footer from "@/components/layout/Footer/_index";
import Nav from "@/components/layout/NavBar/_index";
import StyledLink from "../components/ui/navigation/StyledLink";

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
			<Nav.Root>
				<StyledLink href="/">
					<StyledBrandLogo />
				</StyledLink>
				<Nav.Menu>
					<Nav.MenuItems />
				</Nav.Menu>
			</Nav.Root>
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
