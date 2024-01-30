import React from "react";
import { PlusIcon, StyledButton } from "@/modules/common/components";

const ButtonIcon = <PlusIcon width={16} height={16} />;

export default function ButtonAddPokemon() {
	return (
		<StyledButton variant="outline" rightSection={ButtonIcon}>
			Adicionar novo pokémon ao time
		</StyledButton>
	);
}
