import type { SVGProps } from "react";

export default function WhitePokeball(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={37}
			height={34}
			fill="none"
			{...props}
		>
			<circle cx={19} cy={17} r={17} fill="#fff" />
			<path stroke="#E40F0F" strokeWidth={2} d="M0 17h37" />
			<circle cx={19.5} cy={17.5} r={6.5} fill="#E40F0F" />
			<circle cx={19.5} cy={17.5} r={4.5} fill="#fff" />
		</svg>
	);
}
