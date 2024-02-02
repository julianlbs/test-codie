import React, { type ReactNode } from "react";
import styled from "styled-components";
import { default as Link } from "../Link";

interface StyledBreadCrumbListProps
	extends React.HTMLAttributes<HTMLDivElement> {
	items: { title: string; href: string }[];
	separator?: ReactNode;
}

const ItemWrapper = styled.div<React.HTMLAttributes<HTMLDivElement>>`
	display: flex;
	gap: 1em;
	align-items: center;
`;

const StyledLink = styled(Link)`
	color: white;
	font-size: 12px;
	font-weight: 700;

	&:hover {
		color: white;
		text-decoration: underline;
	}

	&:focus {
		color: white;
	}
`;

function BreadCrumbList(props: StyledBreadCrumbListProps) {
	const { items, ...otherProps } = props;

	return (
		<>
			{items.map((item, index) => (
				<ItemWrapper key={index} {...otherProps}>
					<StyledLink href={item.href}>{item.title}</StyledLink>
					{index < items.length - 1 ? <span>&gt;</span> : null}
				</ItemWrapper>
			))}
		</>
	);
}

const StyledBreadCrumbList = styled(
	BreadCrumbList
)<StyledBreadCrumbListProps>``;

export default StyledBreadCrumbList;
