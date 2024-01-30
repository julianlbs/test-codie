import React from "react";
import styled from "styled-components";

export interface StyledVStackProps
	extends React.HTMLAttributes<HTMLDivElement> {
	gap?: string;
}

function VStack(props: StyledVStackProps) {
	const { gap, ...otherProps } = props;
	return <div {...otherProps} />;
}

const StyledVStack = styled(VStack)<{ gap?: string }>`
	display: flex;
	flex-direction: column;
	${(props) => (props.gap ? { gap: props.gap } : { gap: "1rem" })}
`;

export default StyledVStack;
