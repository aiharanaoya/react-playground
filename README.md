# React Playground

TypeScript と Vite で構築された React コンポーネント開発用プレイグラウンド。様々な技術を試したり、包括的なツールサポートを備えた UI コンポーネントを構築するための環境です。

## 特徴

- **React 19** と **TypeScript** による型安全なコンポーネント開発
- **Vite** による高速な開発とビルド
- **CSS Modules** と CSS Modules Kit による TypeScript 型定義の自動生成
- **Storybook** によるコンポーネントドキュメントとビジュアルテスト
- **Vitest** + **Testing Library** による包括的なテスト
- **Biome** による Lint とフォーマット

## クイックスタート

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# Storybook の起動
pnpm storybook
```

## 利用可能なスクリプト

```bash
# 開発
pnpm dev          # Vite 開発サーバーを起動
pnpm storybook    # Storybook を起動

# ビルド
pnpm build        # 本番用ビルドを作成
pnpm preview      # 本番ビルドをプレビュー

# コード品質
pnpm typecheck    # TypeScript の型チェックを実行
pnpm lint         # Linter とフォーマッターを実行

# テスト
pnpm test         # 全てのテストを実行

# CSS Modules
pnpm cssdts       # CSS Modules の型定義を生成
```

## 技術スタック

- React 19.2.0
- TypeScript 5.9
- Vite 7.1
- Storybook 9.1
- Vitest 3.2
- Biome
