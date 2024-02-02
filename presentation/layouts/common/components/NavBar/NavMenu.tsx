import React from "react";
import styled from "styled-components";
import { useWindowSize } from "@/presentation/common/hooks/_index";
import StyledNavMenuMobile from "./NavMenuMobile";
import StyledNavMenuDesktop from "./NavMenuDesktop";
import { type StyledNavMenuListItemsProps } from "./NavMenuItems";
import { useRouter } from "next/router";

interface NavMenuProps
	extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
	children: React.ReactElement<StyledNavMenuListItemsProps>;
}

export interface StyledNavMenuProps extends NavMenuProps {}

function NavMenu(props: StyledNavMenuProps) {
	const { children, ...otherProps } = props;
	const { screenSize } = useWindowSize();

	/* --------------------------- render mobile menu --------------------------- */
	if (screenSize === "sm") {
		return (
			<StyledNavMenuMobile {...otherProps}>{children}</StyledNavMenuMobile>
		);
	}

	/* --------------------------- render desktop menu -------------------------- */
	if (screenSize !== undefined) {
		return (
			<StyledNavMenuDesktop {...otherProps}>{children}</StyledNavMenuDesktop>
		);
	}

	return <></>;
}

const StyledNavMenu = styled(NavMenu)``;

export default StyledNavMenu;
