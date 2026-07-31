# ER Companion - Setup & Deployment Guide

## Local Development

### Quick Start (5 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Navigate to http://localhost:3000
```

### Development Workflow

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)
Vercel is the official platform for Next.js and offers the easiest deployment.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# The app will be live at vercel.com with a custom domain option
```

**Benefits:**
- Zero configuration
- Automatic HTTPS
- CDN edge caching
- Serverless functions included
- Free tier available

### Option 2: Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# Build Docker image
docker build -t er-companion .

# Run container
docker run -p 3000:3000 er-companion
```

### Option 3: Traditional Node Server

```bash
# Build the app
npm run build

# Start on your server
npm start
```

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Performance Optimization

The app is built for speed:

- **Static Generation**: Most pages pre-rendered at build time
- **Code Splitting**: Automatic by Next.js
- **Image Optimization**: Handled by Next.js
- **CSS Optimization**: Tailwind purges unused styles
- **Mobile-Optimized**: Responsive design, touch-friendly

## Accessibility

- WCAG 2.1 Level AA compatible
- Keyboard navigation support
- Screen reader friendly semantic HTML
- High contrast color schemes

## Testing the App

### What to Test

1. **Homepage**
   - [ ] Load the homepage
   - [ ] Select different journey stages
   - [ ] Verify progress tracker updates
   - [ ] Verify localStorage persists selection

2. **Journey Stages**
   - [ ] Open each of 7 journey stages
   - [ ] Verify content displays correctly
   - [ ] Check navigation between stages
   - [ ] Test feedback buttons (helpful/not helpful)

3. **Tests Module**
   - [ ] View all tests
   - [ ] Search for specific tests
   - [ ] Click test card to expand details
   - [ ] Verify links to related resources

4. **Procedures Module**
   - [ ] View all procedures
   - [ ] Search functionality
   - [ ] Card expansion
   - [ ] Mobile responsiveness

5. **Medications Module**
   - [ ] View all medications
   - [ ] Search and filter
   - [ ] Disclaimer displays correctly

6. **Dictionary**
   - [ ] Search medical terms
   - [ ] Verify definitions and examples
   - [ ] Check pronunciation guides
   - [ ] No results handling

7. **Chat**
   - [ ] Load chat interface
   - [ ] Send test messages
   - [ ] Verify safety guardrails:
     - [ ] Type "diagnose me" → should get warning
     - [ ] Type "what medicine should I take" → should get warning
     - [ ] Type "chest pain" → should get emergency alert
     - [ ] Type "what is an ekg" → should get educational response
   - [ ] Check localStorage persists stage info

8. **Mobile Testing**
   - [ ] Test on phone (iPhone, Android)
   - [ ] Verify touch interactions
   - [ ] Check responsive design
   - [ ] Test landscape orientation

9. **Safety**
   - [ ] Verify no medical advice is given
   - [ ] Check disclaimers display everywhere
   - [ ] Test that emergency alerts appear
   - [ ] Confirm no data is transmitted

## Environment Variables

Currently, the app requires no environment variables. To add configuration in the future, create a `.env.local` file:

```
# .env.local
NEXT_PUBLIC_HOSPITAL_NAME=Your Hospital Name
NEXT_PUBLIC_EMERGENCY_NUMBER=911
```

## Monitoring & Analytics (Optional)

To add analytics without affecting privacy:

```bash
# Install analytics library (example: Google Analytics 4)
npm install @next/third-parties
```

Edit `src/app/layout.tsx` to add analytics that track only anonymous usage patterns (no personal data).

## Security Checklist

- ✅ No patient data collected
- ✅ No sensitive information in code
- ✅ All links use HTTPS
- ✅ Content Security Policy headers recommended
- ✅ No API keys or secrets in code
- ✅ HIPAA compliant (no data storage)

Add security headers in `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        }
      ]
    }
  ]
}
```

## Customization for Your Hospital

### 1. Update Hospital Name
Edit `src/app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'ER Companion - [Your Hospital Name]',
  description: 'A patient guide for [Hospital Name] emergency department...',
};
```

### 2. Customize Colors
Edit `tailwind.config.js` to match your hospital's brand colors.

### 3. Add Hospital Logo
Update the hospital icon (🏥) in the header to your logo.

### 4. Customize ER Journey Steps
Edit `src/data/journeySteps.ts` to reflect your specific ER process if different.

### 5. Add Hospital-Specific Terms
Extend `src/data/terminology.ts` with your hospital's specific procedures or protocols.

## Performance Tips

### For Large Patient Volumes

1. **Enable Caching**
   - Set `Cache-Control` headers to 24 hours
   - Vercel does this automatically

2. **Use CDN**
   - Vercel's Edge Network caches globally
   - Or use Cloudflare with Next.js

3. **Monitor Performance**
   - Use Vercel Analytics
   - Monitor Core Web Vitals
   - Check bundle size: `npm run build`

## Troubleshooting

### Issue: App doesn't load
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Issue: Styles not loading
```bash
# Rebuild Tailwind cache
rm -rf .next
npm run dev
```

### Issue: localStorage not working
- Check if browser storage is enabled
- Test in incognito mode (should still work)
- Verify no browser extensions blocking storage

### Issue: Chat responses slow
- Add more specific response logic for common questions
- Pre-calculate common responses
- Consider adding response caching

## Support & Maintenance

### Regular Maintenance
- Check for Next.js updates quarterly: `npm outdated`
- Test app after Next.js upgrades
- Review security advisories: `npm audit`

### Content Updates
- Review medical content annually
- Update based on new ER protocols
- Add new tests/procedures as needed
- Update terminology based on patient feedback

### Analytics & Improvements
- Monitor most-searched terms
- Identify confusing sections
- Add FAQs based on chat interactions
- Refine content based on usage patterns

## Questions?

If you have questions about deployment, customization, or functionality, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel Deployment: https://vercel.com/docs

---

**Happy deploying! ER Companion is ready to help patients understand their emergency care journey.**
