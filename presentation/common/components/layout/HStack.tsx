import type { HTMLAttributes } from "react";
import styled from "styled-components";

export interface StyledHStackProps extends HTMLAttributes<HTMLDivElement> {
	gap?: string;
}

function HStack(props: StyledHStackProps) {
	const { gap, ...otherProps } = props;
	return <div {...otherProps} />;
}

const StyledHStack = styled(HStack)<{ gap?: string }>`
	display: flex;
	align-items: center;
	${(props) => (props.gap ? { gap: props.gap } : { gap: "1rem" })}
`;

export default StyledHStack;
