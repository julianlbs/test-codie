import React, { type ReactNode } from "react";
import styled from "styled-components";
import { default as Link } from "./StyledLink";

export interface BreadCrumbsProps {
	items: { title: string; href: string }[];
	separator?: ReactNode;
}

const Wrapper = styled.div<{ key?: number; children: ReactNode }>`
	display: flex;
	gap: 1em;
	align-items: center;
`;

const StyledLink = styled(Link)`
	color: white;

	&:hover {
		color: white;
		text-decoration: underline;
	}

	&:focus {
		color: white;
	}
`;

export default function BreadCrumbs(props: BreadCrumbsProps) {
	const { items } = props;

	const listItems: JSX.Element[] = items.map((item, index) => (
		<Wrapper key={index}>
			<StyledLink href={item.href}>{item.title}</StyledLink>
			{index < items.length - 1 ? <span>&gt;</span> : null}
		</Wrapper>
	));

	return <Wrapper>{listItems}</Wrapper>;
}
