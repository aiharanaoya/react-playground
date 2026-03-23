import type { ComponentPropsWithoutRef, FC } from 'react';

type Props = {
	text: string;
} & ComponentPropsWithoutRef<'button'>;

export const Button: FC<Props> = ({ text, ...rest }: Props) => {
	return (
		<button
			className="bg-blue-500 text-white rounded font-bold text-center cursor-pointer transition duration-300 hover:opacity-70 disabled:cursor-default disabled:opacity-70"
			{...rest}
		>
			{text}
		</button>
	);
};
