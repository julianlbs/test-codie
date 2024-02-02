import React, { type ReactNode } from "react";
import styled from "styled-components";
import {
	StyledBrandLogo,
	StyledLink,
} from "@/presentation/common/components/_index";
import Footer from "./common/components/Footer/Footer";
import NavBar from "./common/components/NavBar/_index";

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
			<NavBar.Root>
				<StyledLink href="/">
					<StyledBrandLogo />
				</StyledLink>
				<NavBar.Menu>
					<NavBar.MenuItems />
				</NavBar.Menu>
			</NavBar.Root>
			{children}
			<Footer>
				<FooterText>
					Todas as marcas e ilustrações utilizadas são de seus respectivos
					donos.
				</FooterText>
			</Footer>
		</Container>
	);
}
