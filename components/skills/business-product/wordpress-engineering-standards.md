# WordPress Engineering & Enterprise Standards

This skill outlines the standards for architecting high-performance, secure, and scalable WordPress applications, going beyond basic theme/plugin development.

## Performance & Optimization
- **Caching Strategy**: Implement a multi-layer proxy strategy.
    - **Page Cache**: Use Varnish or Cloudflare at the edge.
    - **Object Cache**: Use Redis or Memcached to persist database queries (transients).
    - **OpCache**: Ensure PHP OpCache is enabled and tuned.
- **Database Tuning**: Optimize `wp_options` by keeping autoloaded data < 1MB. Use custom tables for high-volume data instead of `wp_postmeta` to avoid N+1 query performance kills.
- **Assets**: Enqueue scripts and styles conditionally (only where needed). Defer non-critical JS. Use WebP for images.
- **Debloating**: Disable unused core features (Emoji scripts, Embeds, XML-RPC) via `functions.php` or a site-specific plugin.

## Modern Development Workflow
- **Bedrock/Roots**: Prefer the Bedrock stack for 12-Factor App compliance (Environment variables for config, Composer for dependency management).
- **Version Control**: Never commit core files or third-party plugins/themes to Git. Use `composer.json` to manage them.
- **Block Editor (Gutenberg)**: Build custom blocks using React/JSX and `@wordpress/scripts`. Avoid shortcodes or heavy page builders (Divi/Elementor) for enterprise sites.

## Security Hardening
- **Least Privilege**: Run PHP-FPM as a non-root user. Set file permissions strictly (`755` for dirs, `644` for files).
- **Authentication**: Enforce 2FA for all Admin users.
- **Defense**: Change the default login URL. Disable file editing in the dashboard (`DISALLOW_FILE_EDIT`).
- **Salts**: Rotate security keys and salts regularly in `wp-config.php`.

## Headless & API
- **REST/GraphQL**: Use WPGraphQL for headless architectures. It provides a strictly typed schema and predictable query performance compared to the default REST API.
- **Authentication**: Use JWT (JSON Web Tokens) or Application Passwords for decoupled front-end authentication.
