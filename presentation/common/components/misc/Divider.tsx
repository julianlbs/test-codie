import { type HTMLAttributes } from "react";
import styled from "styled-components";

export interface StyledDividerProps extends HTMLAttributes<HTMLHRElement> {}

function Divider(props: StyledDividerProps) {
	return <hr {...props} />;
}

const StyledDivider = styled(Divider)`
	width: 100%;
	color: rgba(0, 0, 0, 0.3);
`;

export default StyledDivider;
