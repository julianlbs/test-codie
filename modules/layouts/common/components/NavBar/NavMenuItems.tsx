import React, { type ReactNode } from "react";
import { Button, StyledLink } from "@/modules/common";
import { useWindowSize } from "@/modules/common";
import Hamburger from "hamburger-react";
import styled from "styled-components";

interface NavMenuItemsProps {
	items?: ReactNode;
}

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

export const defaultNavMenuItems = [
	<StyledLink key="QuemSomos" href="/quem-somos">
		<Button $variant="unstyled">Quem somos</Button>
	</StyledLink>,
	<Button key="AgendarConsulta">Agendar Consulta</Button>,
];

export default function NavMenuItems(
	props: NavMenuItemsProps
): JSX.Element | null {
	const { items = defaultNavMenuItems } = props;

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
		return <>{items}</>;
	}

	// TODO: Maybe it's possible to get the user device from the hook userAgent!!
	return <></>;
}
