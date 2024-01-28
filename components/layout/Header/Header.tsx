import React from "react";
import styled from "styled-components";
import H1 from "@/components/ui/typography/H1";
import BreadCrumbs, {
	BreadCrumbsProps,
} from "@/components/ui/navigation/BreadCrumbs";

interface HeaderProps {
	title: string;
	subtitle: string;
	breadCrumbs: BreadCrumbsProps["items"];
}

const Wrapper = styled.header`
	width: 100%;
	padding: 3em 2em;
	background-color: ${(props) => props.theme.colors.primary};
	color: white;
	display: flex;
	flex-direction: column;
	gap: 0.6em;
`;

export default function Header(props: HeaderProps) {
	const { title, subtitle, breadCrumbs } = props;

	return (
		<Wrapper>
			<BreadCrumbs items={breadCrumbs} />
			<H1>{title}</H1>
			<p>{subtitle}</p>
		</Wrapper>
	);
}
