import styled from "styled-components";

export interface StyledFormProps
	extends React.FormHTMLAttributes<HTMLFormElement> {}

function Form(props: StyledFormProps) {
	return <form {...props} />;
}

const StyledForm = styled(Form)<StyledFormProps>`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 2rem 0;

	@media screen and (max-width: 756px) {
		padding: 1rem 0;
	}
`;

export default StyledForm;
