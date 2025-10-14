# React Playground

A React component development playground built with TypeScript and Vite. This environment is designed for experimenting with various technologies and building UI components with comprehensive tooling support.

## Features

- **React** with **TypeScript** for type-safe component development
- **Vite** for fast development and builds
- **CSS Modules** with TypeScript definitions via CSS Modules Kit
- **Storybook** for component documentation and visual testing
- **Vitest** + **Testing Library** for comprehensive testing
- **Biome** for linting and formatting

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Launch Storybook
pnpm storybook
```

## Available Scripts

```bash
# Development
pnpm dev          # Start Vite dev server
pnpm storybook    # Launch Storybook

# Building
pnpm build        # Build for production
pnpm preview      # Preview production build

# Code Quality
pnpm typecheck    # Run TypeScript checks
pnpm lint        # Run linter and formatter

# Testing
pnpm test         # Run all tests

# CSS Modules
pnpm cssdts          # Generate CSS Modules type definitions
```
