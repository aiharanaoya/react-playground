import type { ComponentPropsWithoutRef, FC } from 'react';
import styles from './Button.module.css';

type Props = {
	text: string;
} & ComponentPropsWithoutRef<'button'>;

export const Button: FC<Props> = ({ text, ...rest }: Props) => {
	return (
		<button className={styles.root} {...rest}>
			{text}
		</button>
	);
};
