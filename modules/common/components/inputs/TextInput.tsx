import { forwardRef, type InputHTMLAttributes } from "react";
import styled from "styled-components";
import { StyledLabel } from "@/modules/common/components";
import { StyledError, StyledRequired, inputStyle } from "./styles/_index";

export interface StyledTextInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
	label?: string;
	direction?: "horizontal" | "vertical";
	required?: boolean;
	error?: string;
}

const Wrapper = styled.div<StyledTextInputProps>`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;

	${(props) =>
		props.direction === "horizontal"
			? {
					flexDirection: "row",
					justifyContent: "center",
			  }
			: null}
`;

const TextInput = forwardRef<HTMLInputElement, StyledTextInputProps>(
	function textInput(props, ref) {
		const { label, direction, required, error, ...otherProps } = props;
		return (
			<Wrapper>
				<Wrapper direction={direction}>
					{label ? (
						<StyledLabel htmlFor={label}>
							{label} {required ? <StyledRequired>*</StyledRequired> : null}
						</StyledLabel>
					) : null}
					<input ref={ref} id={label} type="text" {...otherProps} />
				</Wrapper>
				{error ? <StyledError>{error}</StyledError> : null}
			</Wrapper>
		);
	}
);

const StyledInput = styled(TextInput)<StyledTextInputProps>`
	${inputStyle}
`;

export default StyledInput;
