import type { HTMLAttributes } from "react";
import styled from "styled-components";

export interface StyledGridProps extends HTMLAttributes<HTMLDivElement> {}

function Grid(props: StyledGridProps) {
	return <div {...props} />;
}

const StyledGrid = styled(Grid)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.5rem;

	@media screen and (max-width: 756px) {
		grid-template-columns: 1fr;
	}
`;

export default StyledGrid;
