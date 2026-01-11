# Deployment Guide

This Next.js application can be deployed to various platforms. Here are the recommended options:

## Vercel (Recommended)

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub (already done)
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ledminh/minnet)

## Netlify

Deploy to Netlify:

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Deploy

## Static Export (for any host)

Since all pages are static, you can export to static HTML:

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
};
```

2. Build the static site:
```bash
npm run build
```

3. The static files will be in the `out` directory
4. Upload to any static hosting service (GitHub Pages, AWS S3, etc.)

## Docker

Build and run with Docker:

```bash
# Build
docker build -t minnet-app .

# Run
docker run -p 3000:3000 minnet-app
```

## Manual Deployment

For manual deployment to a Node.js server:

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

The app will be available on port 3000 by default.

## Environment Variables

This application doesn't require any environment variables for basic functionality. All data is statically defined in the `data/` directory.

## Performance Optimization

The application is already optimized for production:
- Static Site Generation (SSG) for all pages
- Optimized images and assets
- Code splitting and lazy loading
- Minified CSS and JavaScript
- No external API calls (all data is static)

## Monitoring

Consider adding:
- Google Analytics for traffic monitoring
- Sentry for error tracking
- Lighthouse CI for performance monitoring
