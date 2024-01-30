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
	padding: 20px;
	border-radius: 5px;
`;

export default StyledForm;
