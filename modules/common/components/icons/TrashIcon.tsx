import type { SVGProps } from "react";

export default function TrashIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			{...props}
		>
			<path fill="transparent" d="M0 0h24v24H0z" />
			<path
				stroke="#currentColor"
				strokeLinejoin="round"
				d="M5 7.5h14L18 21H6L5 7.5Z"
			/>
			<path
				stroke="#currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.5 9.5 15 19M12 9.5V19M8.5 9.5 9 19"
			/>
			<path
				stroke="#currentColor"
				strokeLinejoin="round"
				d="M16 5h3a2 2 0 0 1 2 2v.5H3V7a2 2 0 0 1 2-2h3m8 0-1-2H9L8 5m8 0H8"
			/>
		</svg>
	);
}
