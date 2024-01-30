import React, { type ReactNode } from "react";
import styled from "styled-components";
import StyledBreadCrumbList from "./BreadCrumbList";

export interface StyledBreadCrumbsProps
	extends React.HTMLAttributes<HTMLDivElement> {
	items: { title: string; href: string }[];
	separator?: ReactNode;
}

function BreadCrumbs(props: StyledBreadCrumbsProps) {
	const { items, ...otherProps } = props;

	return (
		<div {...otherProps}>
			<StyledBreadCrumbList items={items} />
		</div>
	);
}

const StyledBreadCrumbs = styled(BreadCrumbs)<StyledBreadCrumbsProps>`
	display: flex;
	gap: 1em;
	align-items: center;
`;

export default StyledBreadCrumbs;
