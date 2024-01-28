import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";
import { Url } from "url";

interface StyledLinkProps {
	as?: Url;
	children: ReactNode;
	className?: string;
	href: Url;
}

const StyledLink = ({ as, children, className, href }: StyledLinkProps) => (
	<Link href={href} as={as} passHref>
		<a className={className}>{children}</a>
	</Link>
);

export default styled(StyledLink)`
	color: #0075e0;
	text-decoration: none;
	transition: all 0.2s ease-in-out;

	&:hover {
		color: #40a9ff;
	}

	&:focus {
		color: #40a9ff;
		outline: none;
		border: 0;
	}
`;