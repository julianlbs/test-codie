import type { ButtonHTMLAttributes } from "react";
import {
	PlusIcon,
	StyledButton,
} from "@/presentation/common/components/_index";

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
