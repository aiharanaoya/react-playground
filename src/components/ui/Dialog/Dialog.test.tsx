import { user } from '@/testing/setupTestingLibrary';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { Dialog } from '.';

describe('Dialog', () => {
	test('ダイアログが開いている場合、コンテンツが表示される', () => {
		render(
			<Dialog isOpen={true} setIsOpen={() => {}} title="Test Dialog">
				Test Content
			</Dialog>,
		);
		expect(screen.getByRole('dialog')).toBeInTheDocument();
		expect(screen.getByText('Test Dialog')).toBeInTheDocument();
		expect(screen.getByText('Test Content')).toBeInTheDocument();
	});

	test('ダイアログが閉じている場合、コンテンツが表示されない', () => {
		render(
			<Dialog isOpen={false} setIsOpen={() => {}} title="Test Dialog">
				Test Content
			</Dialog>,
		);
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	test('閉じるボタンがクリックされた時、onClose関数が呼ばれる', async () => {
		const handleClose = vi.fn();
		render(
			<Dialog isOpen={true} setIsOpen={handleClose} title="Test Dialog">
				Test Content
			</Dialog>,
		);
		const closeButton = screen.getByRole('button');
		await user.click(closeButton);
		expect(handleClose).toHaveBeenCalledTimes(1);
	});
});
