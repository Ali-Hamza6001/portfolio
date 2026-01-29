# Deployment Guide

## 🚀 Quick Deploy to Vercel

### Method 1: GitHub + Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your portfolio repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add the following variables:
     ```
     EMAIL_HOST=smtp.gmail.com
     EMAIL_PORT=587
     EMAIL_SECURE=false
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     EMAIL_TO=your-email@gmail.com
     ```
   - Redeploy the project

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

During deployment, you'll be asked to add environment variables. Set them when prompted.

---

## 📧 Email Configuration for Production

### Gmail Setup (Recommended for Testing)

1. **Enable 2-Factor Authentication**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Generate App Password**
   - Visit [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom name)"
   - Name it "Portfolio Contact Form"
   - Copy the 16-character password

3. **Set Environment Variables**
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=xxxx xxxx xxxx xxxx  # The app password
   EMAIL_TO=your-email@gmail.com
   ```

### SendGrid Setup (Recommended for Production)

1. **Create SendGrid Account**
   - Visit [sendgrid.com](https://sendgrid.com)
   - Sign up for free (100 emails/day)

2. **Create API Key**
   - Go to Settings → API Keys
   - Create new API Key with "Mail Send" permissions
   - Copy the API key

3. **Set Environment Variables**
   ```env
   EMAIL_HOST=smtp.sendgrid.net
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=apikey
   EMAIL_PASS=your-sendgrid-api-key
   EMAIL_TO=your-email@domain.com
   ```

### Other Email Providers

**Outlook/Hotmail**
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
EMAIL_TO=your-email@outlook.com
```

**Mailgun**
```env
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=postmaster@your-domain.mailgun.org
EMAIL_PASS=your-mailgun-smtp-password
EMAIL_TO=your-email@domain.com
```

---

## ✅ Pre-Deployment Checklist

### 1. Update Personal Information

- [ ] **Hero Section** (`components/Hero.js`)
  - Update name and introduction
  - Add your professional photo
  
- [ ] **About Section** (`components/About.js`)
  - Customize your background and experience
  
- [ ] **Skills** (`components/Skills.js`)
  - Update with your actual tech stack
  
- [ ] **Experience** (`components/Experience.js`)
  - Add your real work experience
  - Update project details
  
- [ ] **Footer** (`components/Footer.js`)
  - Update social media links (GitHub, LinkedIn, Twitter)
  - Replace placeholder URLs with your profiles

- [ ] **Contact** (`components/Contact.js`)
  - Update email and location information

### 2. SEO & Metadata

- [ ] Update `app/page.js` metadata
  - Title
  - Description
  - Keywords
  - OpenGraph tags

- [ ] Update `app/layout.js` metadata
  - Site title
  - Site description

### 3. Assets

- [ ] Add your professional photo to `/public` folder
- [ ] Add favicon (if not using default)
- [ ] Optimize images with Next/Image

### 4. Environment Variables

- [ ] Create `.env.local` for development
- [ ] Set up environment variables in Vercel
- [ ] Test contact form in development
- [ ] Test contact form in production

### 5. Code Quality

- [ ] Run `npm run lint` - Fix any errors
- [ ] Run `npm run build` - Ensure successful build
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check performance with Lighthouse

---

## 🔧 Post-Deployment

### 1. Test Everything

- [ ] All navigation links work
- [ ] Smooth scrolling works
- [ ] Contact form sends emails
- [ ] All animations play smoothly
- [ ] Mobile responsive design
- [ ] Social links are correct

### 2. Performance Optimization

- [ ] Check Lighthouse score (aim for 90+)
- [ ] Verify Core Web Vitals in Google Search Console
- [ ] Test page load speed

### 3. SEO Setup

- [ ] Submit sitemap to Google Search Console
- [ ] Add domain to Google Analytics (optional)
- [ ] Set up custom domain (optional)

### 4. Custom Domain (Optional)

1. **Buy a domain** (Namecheap, Google Domains, etc.)
2. **Add to Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions
3. **Update metadata** with your domain URLs

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Contact Form Not Working

1. Check environment variables in Vercel
2. Verify email credentials
3. Check Vercel function logs
4. Test with development mode locally

### Images Not Loading

1. Ensure images are in `/public` folder
2. Use Next/Image component
3. Check image paths (should be `/image.jpg` not `./image.jpg`)

### Styling Issues

1. Clear browser cache
2. Check Tailwind CSS configuration
3. Verify `globals.css` imports correctly

---

## 📊 Monitoring

### Vercel Analytics (Free)

1. Go to your project on Vercel
2. Navigate to Analytics tab
3. Enable Vercel Analytics
4. View real-time performance data

### Performance Monitoring

Tools to monitor your site:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 🎉 You're Live!

After deployment, your portfolio will be available at:
- Vercel subdomain: `your-project.vercel.app`
- Custom domain: `yourdomain.com` (if configured)

Share your portfolio and start landing opportunities! 🚀
