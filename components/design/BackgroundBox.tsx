import clsx from "clsx";

export default function BackgroundBox(props: {
	points: string
	fill: string
	className?: string
}) {
	const { points, fill, className } = props;

	const classes = clsx(['w-full h-48', className]);

	return (
		<div className={classes}>
			{/* svg from bottom-left to top right to transition background color */}
			<svg
				className={'w-full h-full ' + fill}
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
			>
				<polygon points={points} />
			</svg>
		</div>
	)
}