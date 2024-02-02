import React, { ButtonHTMLAttributes } from "react";
import { PlusIcon, StyledButton } from "@/modules/common/components";

const ButtonIcon = <PlusIcon width={16} height={16} />;

export default function ButtonAddPokemon(
	props: ButtonHTMLAttributes<HTMLButtonElement>
) {
	return (
		<StyledButton variant="outline" rightSection={ButtonIcon} {...props}>
			Adicionar novo pokémon ao time
		</StyledButton>
	);
}
