import {
	FloatingFocusManager,
	FloatingOverlay,
	FloatingPortal,
	useClick,
	useDismiss,
	useFloating,
	useInteractions,
	useRole,
	useTransitionStyles,
} from '@floating-ui/react';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import styles from './Dialog.module.css';

type Props = PropsWithChildren<{
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	title: string;
}>;

export const Dialog: React.FC<Props> = ({
	isOpen,
	setIsOpen,
	title,
	children,
}) => {
	const { refs, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
	});

	const click = useClick(context);

	const dismiss = useDismiss(context, {
		outsidePress: true,
		outsidePressEvent: 'pointerdown',
	});

	const role = useRole(context);

	const { getFloatingProps } = useInteractions([click, dismiss, role]);

	const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
		duration: 400,
		initial: {
			opacity: 0,
			transform: 'translateY(-100vh)',
		},
		open: {
			opacity: 1,
			transform: 'translateY(0)',
		},
		close: {
			opacity: 0,
			transform: 'translateY(-100vh)',
		},
	});

	if (!isMounted) {
		return null;
	}

	return (
		<FloatingPortal>
			<FloatingOverlay lockScroll className={styles.overlay}>
				<FloatingFocusManager context={context}>
					<div
						ref={refs.setFloating}
						style={transitionStyles}
						className={styles.content}
						{...getFloatingProps()}
					>
						<div className={styles.header}>
							<p className={styles.title}>{title}</p>
							<button
								type="button"
								className={styles.closeButton}
								onClick={() => setIsOpen(false)}
							>
								×
							</button>
						</div>
						<div>{children}</div>
					</div>
				</FloatingFocusManager>
			</FloatingOverlay>
		</FloatingPortal>
	);
};
