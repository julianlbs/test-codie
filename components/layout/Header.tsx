import React from "react";
import styled from "styled-components";
import StyledBrandLogo from "../styles/BrandLogo.style";
import StyledButton from "../styles/Button.style";

const Wrapper = styled.div`
	width: 100%;
	padding: 1em 2em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Nav = styled.nav`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

export default function Header() {
	return (
		<Wrapper>
			<StyledBrandLogo />
			<Nav>
				<StyledButton $variant="unstyled">Quem somos</StyledButton>
				<StyledButton>Agendar Consulta</StyledButton>
			</Nav>
		</Wrapper>
	);
}
