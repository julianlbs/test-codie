import {
	default as NextLink,
	type LinkProps as NextLinkProps,
} from "next/link";
import { type ReactNode } from "react";
import styled from "styled-components";

export interface StyledLinkProps extends NextLinkProps {
	children: ReactNode;
	className?: string;
}

function Link(props: StyledLinkProps) {
	const { as, children, className, href } = props;

	return (
		<NextLink href={href} as={as} passHref legacyBehavior>
			<a className={className}>{children}</a>
		</NextLink>
	);
}

const StyledLink = styled(Link)<StyledLinkProps>``;

export default StyledLink;
