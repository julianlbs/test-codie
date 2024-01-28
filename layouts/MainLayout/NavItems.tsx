import React, { type ReactNode } from "react";
import StyledButton from "@/components/styles/Button.style";
import useWindowSize from "@/hooks/useWindowSize";
import Hamburger from "hamburger-react";
import styled from "styled-components";

const Wrapper = styled.div``;

const MobileItemsWrapper = styled.div<{
	readonly $showItems?: boolean;
	children?: ReactNode;
}>`
	z-index: 50;
	position: absolute;
	top: 5.6rem;
	left: 0;
	padding-top: 1rem;
	width: 100%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	padding: 0 2em;
	overflow-y: hidden;
	transition: all 0.4s ease-in-out;

	${(props) =>
		props.$showItems
			? {
					height: 106,
			  }
			: {
					height: 0,
			  }};
`;

const items = (
	<>
		<StyledButton $variant="unstyled">Quem somos</StyledButton>
		<StyledButton>Agendar Consulta</StyledButton>
	</>
);

export default function NavItems() {
	const { screenSize } = useWindowSize();
	const [isOpen, setOpen] = React.useState(false);

	/* --------------------------- render mobile menu --------------------------- */
	if (screenSize === "sm") {
		return (
			<Wrapper>
				<Hamburger toggled={isOpen} toggle={setOpen} />
				<MobileItemsWrapper $showItems={isOpen}>{items}</MobileItemsWrapper>
			</Wrapper>
		);
	}

	/* --------------------------- render desktop menu -------------------------- */
	if (screenSize !== undefined) {
		return items;
	}

	return <></>;
}
