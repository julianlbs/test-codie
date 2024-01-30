import React, { type ComponentProps } from "react";
import styled from "styled-components";

export interface StyledFormAgendarConsultaProps
	extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "type"> {}

function FormAgendarConsulta(props: StyledFormAgendarConsultaProps) {
	return <form {...props} />;
}

const StyledFormAgendarConsulta = styled(
	FormAgendarConsulta
)<StyledFormAgendarConsultaProps>`
	background-color: #f4f4f4;
	padding: 20px;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export default StyledFormAgendarConsulta;
