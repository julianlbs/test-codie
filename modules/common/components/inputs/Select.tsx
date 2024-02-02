import {
	type SelectHTMLAttributes,
	forwardRef,
	OptionHTMLAttributes,
} from "react";
import styled from "styled-components";
import { StyledLabel } from "@/modules/common/components";
import { StyledError, StyledRequired, inputStyle } from "./styles/_index";

export interface StyledSelectProps
	extends SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	direction?: "horizontal" | "vertical";
	required?: boolean;
	error?: string;
}

const Wrapper = styled.div<StyledSelectProps>`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	width: 100%;

	${(props) =>
		props.direction === "horizontal"
			? {
					flexDirection: "row",
					alignItems: "center",
					gap: "3rem",
			  }
			: null};
`;

export const StyedOption = styled.option<
	OptionHTMLAttributes<HTMLOptionElement>
>`
	color: gray;
	${(props) =>
		props.disabled
			? {
					color: "rgba(0, 0, 0, 0.4)",
			  }
			: null}
`;

const Select = forwardRef<HTMLSelectElement, StyledSelectProps>(function select(
	props,
	ref
) {
	const { label, direction, required, error, ...otherProps } = props;

	return (
		<Wrapper>
			<Wrapper direction={direction}>
				{label ? (
					<StyledLabel htmlFor={label} disabled={otherProps.disabled}>
						{label}{" "}
						{required ? (
							<StyledRequired disabled={otherProps.disabled}>*</StyledRequired>
						) : null}
					</StyledLabel>
				) : null}
				<select ref={ref} id={label} {...otherProps} />
			</Wrapper>
			{error ? <StyledError>{error}</StyledError> : null}
		</Wrapper>
	);
});

const StyledSelect = styled(Select)<StyledSelectProps>`
	${inputStyle}
	background-color: white;

	&::placeholder {
		color: rgba(0, 0, 0, 0.2);
	}
`;

export default StyledSelect;
