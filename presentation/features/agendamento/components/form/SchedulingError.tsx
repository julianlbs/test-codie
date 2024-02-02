import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import {
	StyledButton,
	WarningIcon,
} from "../../../../common/components/_index";
import { useRouter } from "next/router";

interface StyleSchedulingErrorProps extends HTMLAttributes<HTMLDivElement> {
	message: string;
}

const StyledTitle = styled.p`
	font-size: 24px;
	font-weight: 700;
`;

const StyledText = styled.p`
	color: rgba(0, 0, 0, 0.8);
`;

function SchedulingError(props: StyleSchedulingErrorProps) {
	const { message, ...otherProps } = props;
	const router = useRouter();

	const handleNewScheduling = () => {
		router.push("/agendar-consulta");
	};

	return (
		<div {...otherProps}>
			<StyledTitle>Houve um problema no agendamento</StyledTitle>

			<WarningIcon width={44} height={44} fill="#E40F0F" />

			<StyledText>{message}</StyledText>

			<StyledButton onClick={handleNewScheduling}>
				Fazer Novo Agendamento
			</StyledButton>
		</div>
	);
}

const StyleSchedulingError = styled(SchedulingError)<StyleSchedulingErrorProps>`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	margin-left: auto;
	margin-right: auto;
	border: 1px solid rgba(223, 134, 134, 60%);
	border-radius: 15px;
	padding: 3rem 2rem;
	width: 100%;

	@media screen and (min-width: 756px) {
		width: 500px;
	}
`;

export default StyleSchedulingError;
