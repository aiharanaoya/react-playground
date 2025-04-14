import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import styles from './Dialog.module.css';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: ReactNode;
} & ComponentPropsWithoutRef<'dialog'>;

export const Dialog: FC<Props> = ({
	isOpen,
	onClose,
	title,
	children,
	...rest
}: Props) => {
	return (
		<dialog className={styles.root} open={isOpen} {...rest}>
			<div className={styles.content}>
				<div className={styles.header}>
					<h2 className={styles.title}>{title}</h2>
					<button className={styles.closeButton} onClick={onClose}>
						×
					</button>
				</div>
				<div className={styles.body}>{children}</div>
			</div>
		</dialog>
	);
};
