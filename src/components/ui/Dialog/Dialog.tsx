import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import styles from './Dialog.module.css';

type Props = PropsWithChildren<{
	isOpen: boolean;
	onClose: () => void;
	title: string;
}> &
	ComponentPropsWithoutRef<'dialog'>;

export const Dialog: FC<Props> = ({
	isOpen,
	onClose,
	title,
	children,
	...rest
}: Props) => {
	return (
		<dialog className={styles.root} open {...rest}>
			<div className={styles.content}>
				<div className={styles.header}>
					<h2 className={styles.title}>{title}</h2>
					<button
						type="button"
						className={styles.closeButton}
						onClick={onClose}
					>
						×
					</button>
				</div>
				<div className={styles.body}>{children}</div>
			</div>
		</dialog>
	);
};
