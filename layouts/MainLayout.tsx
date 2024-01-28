import React, { type ReactNode } from "react";
import styled from "styled-components";
import StyledBrandLogo from "@/components/styles/BrandLogo.style";
import StyledButton from "@/components/styles/Button.style";
import Header from "@/components/layout/Header/_index";
import Footer from "@/components/layout/Footer/_index";

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
				<Header.Nav>
					<StyledButton $variant="unstyled">Quem somos</StyledButton>
					<StyledButton>Agendar Consulta</StyledButton>
				</Header.Nav>
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
