import React from "react";
import {
	StyledButton,
	StyledLink,
} from "@/presentation/common/components/_index";
import styled from "styled-components";
import { useWindowSize } from "@/presentation/common/hooks/_index";
import { useNavMenuStore } from "./store/useNavMenuStore";
import Hamburger from "hamburger-react";

export interface StyledNavMenuListItemsProps
	extends React.HTMLAttributes<HTMLUListElement> {
	items?: JSX.Element[];
}

export const defaultNavMenuItems = [
	<StyledLink key="QuemSomos" href="/quem-somos">
		<StyledButton variant="unstyled">Quem somos</StyledButton>
	</StyledLink>,
	<StyledLink key="AgendarConsulta" href="/agendar-consulta">
		<StyledButton>Agendar Consulta</StyledButton>
	</StyledLink>,
];

const MobileWrapper = styled.div<
	React.HTMLAttributes<HTMLUListElement> & { showMenu: boolean }
>`
	z-index: 100;
	position: fixed;
	top: 0;
	right: -100%;
	padding-top: 1rem;
	height: 100vh;
	width: 0;
	background-color: white;
	padding: 2rem 2em;
	overflow: hidden;
	transition: all 0.4s ease-in-out;
	${(props) =>
		props.showMenu
			? {
					width: "100%",
					right: 0,
			  }
			: {
					width: 0,
			  }};
`;

const StyledMobileUList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	list-style: none;
`;

function NavMenuListItems(props: StyledNavMenuListItemsProps) {
	const { items = defaultNavMenuItems, ...otherProps } = props;
	const { screenSize } = useWindowSize();
	const { showMenu, setShowMenu } = useNavMenuStore();

	const closeMenu = () => {
		setShowMenu(false);
	};

	if (screenSize === "sm") {
		return (
			<MobileWrapper onClick={closeMenu} showMenu={showMenu}>
				<Hamburger toggled={showMenu} toggle={setShowMenu} size={24} />
				<StyledMobileUList>
					{items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</StyledMobileUList>
			</MobileWrapper>
		);
	}

	return (
		<ul {...otherProps}>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
}

const StyledNavMenuListItems = styled(
	NavMenuListItems
)<StyledNavMenuListItemsProps>`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

export default StyledNavMenuListItems;
