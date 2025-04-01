import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'http://localhost:48006/umbraco/swagger/delivery/swagger.json',
  output: 'src/umbraco-client/content/api',
  plugins: [
    '@hey-api/client-fetch',
    {
        serviceNameBuilder: '{{name}}Service',
        name: '@hey-api/sdk'
    },
  ],
});