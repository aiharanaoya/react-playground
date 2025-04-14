import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
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
		<CSSTransition
			in={isOpen}
			timeout={300}
			classNames={{
				enter: styles.enter,
				enterActive: styles.enterActive,
				exit: styles.exit,
				exitActive: styles.exitActive,
			}}
			unmountOnExit
		>
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
		</CSSTransition>
	);
};
