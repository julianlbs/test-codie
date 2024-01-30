import React from "react";
import styled from "styled-components";
import {
	StyledH1,
	StyledBreadCrumbs,
	StyledBreadCrumbsProps,
} from "@/modules/common/components";
export interface StyledHeaderProps extends React.HTMLAttributes<HTMLElement> {
	title: string;
	subtitle: string;
	breadCrumbs: StyledBreadCrumbsProps["items"];
}

function Header(props: StyledHeaderProps) {
	const { title, subtitle, breadCrumbs, ...otherProps } = props;

	return (
		<header {...otherProps}>
			<StyledBreadCrumbs items={breadCrumbs} />
			<StyledH1>{title}</StyledH1>
			<p>{subtitle}</p>
		</header>
	);
}

const StyledHeader = styled(Header)<StyledHeaderProps>`
	width: 100%;
	padding: 3em 2em;
	background-color: ${(props) => props.theme.colors.primary};
	color: white;
	display: flex;
	flex-direction: column;
	gap: 0.6em;
`;
export default StyledHeader;
