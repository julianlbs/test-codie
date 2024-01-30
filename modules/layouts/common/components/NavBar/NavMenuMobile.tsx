import Hamburger from "hamburger-react";
import React from "react";
import styled from "styled-components";
import { type StyledNavMenuListItemsProps } from "./NavMenuItems";
import { useNavMenuStore } from "./store/useNavMenuStore";

export interface StyledNavMenuMobileProps
	extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
	children: React.ReactElement<StyledNavMenuListItemsProps>;
}

function NavMenuMobile(props: StyledNavMenuMobileProps) {
	const { children, ...otherProps } = props;
	const { showMenu, setShowMenu } = useNavMenuStore();

	return (
		<div {...otherProps}>
			<Hamburger toggled={showMenu} toggle={setShowMenu} />
			{children}
		</div>
	);
}

const StyledNavMenuMobile = styled(NavMenuMobile)<StyledNavMenuMobileProps>``;

export default StyledNavMenuMobile;
