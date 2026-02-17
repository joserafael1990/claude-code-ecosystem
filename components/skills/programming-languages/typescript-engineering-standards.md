# Modern TypeScript Engineering & Best Practices

This skill outlines the standards for high-level TypeScript (5.0+) development, focusing on advanced type levels, full-stack safety, and high-performance build configurations.

## Advanced Type Engineering
- **Conditional & Mapped Types**: Use conditional types (`T extends U ? X : Y`) and mapped types (`{ [K in keyof T]: U }`) to build flexible, auto-transforming APIs.
- **Discriminated Unions**: Centrally use discriminated unions for managing state machines and complex domain models.
- **Template Literal Types**: Leverage template literal types for string manipulation and type-safe CSS/Path/I18n keys.
- **Type Guarding**: Implement precise type predicates (`arg is Type`) and assertion functions to safely narrow types at runtime.
- **Branded Types**: Use branding (nominal typing) to prevent accidental mixing of primitive types (e.g., `UserId` vs `OrderId`).

## Type System Mastery
- **Inference & Control**: Master the `infer` keyword in conditional types for capturing type parameters. Use `satisfies` for validation without widening.
- **Recursive Types**: Design recursive types for tree-like structures (e.g., JSON, ASTs).
- **Utility Types**: Build custom utility types and leverage built-in ones (`Pick`, `Omit`, `Exclude`, `ReturnType`) for DRY type definitions.

## Full-Stack Type Safety
- **Cross-Boundary Types**: Share type definitions between frontend and backend. Prioritize tRPC or GraphQL Code Generator for automated, end-to-end type safety.
- **API Contracts**: use `Zod` or `Valibot` for runtime validation that feeds directly into TypeScript types.
- **Database Safety**: Use type-safe query builders (e.g., Prisma, Kysely) to ensure database schema alignment with application types.

## Performance & Build Optimization
- **Compiler Configuration**: Enable `strict` mode universally. Optimize `tsconfig.json` with `incremental` and `skipLibCheck`.
- **Project References**: Use TypeScript Project References to split monorepos or large projects into logically isolated units with faster build times.
- **Runtime Performance**: Favor `const enum` for optimization when appropriate. Use type-only imports (`import type { ... }`) to ensure zero-cost runtime impact of types.

## Quality & Consistency
- **ESLint & Prettier**: Enforce strict rules (e.g., `@typescript-eslint/no-explicit-any`) and consistent formatting.
- **Testing**: Use type-safe test utilities and mock type generation to ensure tests are resilient to schema changes.
- **Documentation**: Use TSDoc to provide rich, hovering documentation for complex generics and APIs.
