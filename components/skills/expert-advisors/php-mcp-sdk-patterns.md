# PHP MCP SDK Implementation Patterns

## Tool Implementation (PHP 8.2+)
```php
namespace App\Tools;
use Mcp\Capability\Attribute\{McpTool, Schema};

class ApiManager {
    #[McpTool(name: 'fetch_data', description: 'Fetches data from endpoint')]
    public function fetchData(
        #[Schema(format: 'uri')] string $url,
        #[Schema(minimum: 1)] int $timeout = 30
    ): string {
        // Implementation logic
    }
}
```

## Resource Provider
```php
use Mcp\Capability\Attribute\{McpResource, McpResourceTemplate};

class ConfigProvider {
    #[McpResource(uri: 'config://site/settings', name: 'site_settings', mimeType: 'application/json')]
    public function getSettings(): array { return ['theme' => 'dark']; }

    #[McpResourceTemplate(uriTemplate: 'user://{userId}/profile', name: 'user_profile')]
    public function getProfile(string $userId): array { /* ... */ }
}
```

## Server Orchestration
```php
use Mcp\Server;
use Mcp\Server\Transport\StdioTransport;
use Symfony\Component\Cache\Psr16Cache;

$server = Server::builder()
    ->setServerInfo('My PHP MCP', '1.0.0')
    ->setDiscovery(basePath: __DIR__, scanDirs: ['src/Tools'], cache: $cache)
    ->build();

$server->run(new StdioTransport());
```

## Best Practices
- **Strict Types**: Always `declare(strict_types=1);`.
- **Discovery Cache**: use PSR-16 cache to prevent expensive attribute scanning on every request.
- **Attributes**: Use the official Foundation SDK attributes for Tool/Resource discovery.
