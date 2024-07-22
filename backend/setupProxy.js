import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app) {
  app.use(
    '/', // 👈🏽 your API endpoint goes here.
    createProxyMiddleware({
      target: 'http://localhost:8080', // 👈🏽 your API URL goes here.
      changeOrigin: true,
    })
  );
}
