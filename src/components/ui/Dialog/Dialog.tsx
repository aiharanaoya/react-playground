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
	if (!isOpen) {
		return null;
	}

	return (
		<dialog className={styles.root} open={isOpen} {...rest}>
			<div className={styles.content}>
				<div className={styles.header}>
					<p className={styles.title}>{title}</p>
					<button
						type="button"
						className={styles.closeButton}
						onClick={onClose}
					>
						×
					</button>
				</div>
				<div>{children}</div>
			</div>
		</dialog>
	);
};
