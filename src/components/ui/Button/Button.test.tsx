import { user } from '@/testing/setupTestingLibrary';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { Button } from '.';

describe('Button', () => {
	test('テキストが正しく表示される', () => {
		render(<Button text="Button" />);
		expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument();
	});

	test('追加のクラス名が正しく適用される', () => {
		render(<Button text="Button" className="customClass" />);
		expect(screen.getByRole('button', { name: 'Button' })).toHaveClass(
			'customClass',
		);
	});

	test('クリックイベントが正しく動作する', async () => {
		const handleClick = vi.fn();
		render(<Button text="Button" onClick={handleClick} />);
		const button = screen.getByRole('button', { name: 'Button' });
		await user.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test('disabled属性が正しく動作する', async () => {
		const handleClick = vi.fn();
		render(<Button text="Button" disabled onClick={handleClick} />);
		const button = screen.getByRole('button', { name: 'Button' });
		expect(button).toBeDisabled();
		await user.click(button);
		expect(handleClick).toHaveBeenCalledTimes(0);
	});
});
