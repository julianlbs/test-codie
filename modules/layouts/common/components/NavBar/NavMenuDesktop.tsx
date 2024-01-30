import styled from "styled-components";
import { type StyledNavMenuListItemsProps } from "./NavMenuItems";

interface NavMenuDesktopProps
	extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
	children: React.ReactElement<StyledNavMenuListItemsProps>;
}
export interface StyledMenuDesktopProps extends NavMenuDesktopProps {}

function NavMenuDesktop(props: NavMenuDesktopProps) {
	const { children, ...otherProps } = props;
	return <div {...otherProps}>{children}</div>;
}

const StyledNavMenuDesktop = styled(NavMenuDesktop)``;

export default StyledNavMenuDesktop;
