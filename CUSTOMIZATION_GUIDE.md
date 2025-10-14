# Customization Guide for Your Mom's Website

## 🎯 Priority Changes (Do These First!)

### 1. Business Name
**Current**: SwimPro  
**Change in**:
- `components/navigation.tsx` - Line 30
- `components/footer.tsx` - Line 9
- `app/layout.tsx` - Lines 8-9

```tsx
// Example change:
<h1 className="text-2xl font-bold text-primary">Your Mom's Coaching Name</h1>
```

### 2. Contact Information
**File**: `components/contact-section.tsx`

Update these lines:
```tsx
// Line ~95 - Email
<a href="mailto:yourmom@email.com">yourmom@email.com</a>

// Line ~105 - Phone  
<a href="tel:+60123456789">+60 12-345-6789</a>

// Line ~115 - Location
<p className="text-gray-600">
  Your City, Malaysia
</p>
```

### 3. Operating Hours
**File**: `components/contact-section.tsx` (Lines ~130-145)

```tsx
<div className="flex justify-between">
  <span>Monday - Friday</span>
  <span className="font-medium">Your Hours</span>
</div>
```

### 4. Hero Section Content
**File**: `components/hero-section.tsx`

**Update statistics** (Lines ~50-65):
```tsx
<div className="text-3xl font-bold text-primary">15+</div>
<div className="text-sm text-gray-600">Years Experience</div>
```

**Update main headline** (Lines ~40-45):
```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
  Your Custom
  <span className="text-primary block">Headline Here</span>
</h1>
```

## 🎨 Design Customization

### Change Primary Color

**File**: `app/globals.css` (Line ~8)

Current color is Ocean Blue. To change:

1. Visit [UIColors](https://uicolors.app/create)
2. Pick your color
3. Copy the HSL values for `600` shade
4. Replace:

```css
--primary: 199 89% 48%;  /* Change these numbers */
```

**Popular swimming-related colors**:
- Ocean Blue (current): `199 89% 48%`
- Turquoise: `174 72% 56%`
- Navy: `210 100% 25%`
- Teal: `180 100% 37%`

### Customize Services

**File**: `components/services-section.tsx` (Lines ~7-38)

Edit the services array:
```tsx
const services = [
  {
    icon: Users,
    title: "Your Service Name",
    description: "Your description...",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  // Add more services...
];
```

### Update Meta Tags (SEO)

**File**: `app/layout.tsx` (Lines ~7-10)

```tsx
export const metadata: Metadata = {
  title: "Your Mom's Name | Swimming Coach Malaysia",
  description: "Custom description about your mom's coaching services...",
};
```

## 📸 Adding Real Images

### Step 1: Add Images to Project

1. Create a folder: `/public/images/`
2. Add your images there (e.g., `coach-photo.jpg`, `pool.jpg`)

### Step 2: Replace Placeholders

**Hero Section** (`components/hero-section.tsx`, Line ~70):

```tsx
import Image from 'next/image';

// Replace the emoji div with:
<Image
  src="/images/your-mom-coaching.jpg"
  alt="Swimming coach in action"
  fill
  className="object-cover rounded-3xl"
  priority
/>
```

### Step 3: Optimize Images

Before uploading:
1. Resize to appropriate dimensions (max 1920px width)
2. Convert to WebP format (use [Squoosh](https://squoosh.app/))
3. Compress to reduce file size

## 🔗 Social Media Links

**File**: `components/footer.tsx` (Lines ~20-42)

Replace `#` with actual URLs:
```tsx
<a
  href="https://facebook.com/yourpage"
  className="..."
>
  <Facebook className="w-5 h-5" />
</a>
```

## 📝 Content Updates

### About/Why Choose Section

**File**: `components/services-section.tsx` (Lines ~85-115)

Update the benefits:
```tsx
<div>
  <h4 className="font-semibold text-gray-900 mb-1">Your Benefit Title</h4>
  <p className="text-gray-600">Your description here</p>
</div>
```

### Program Generator

**File**: `components/program-generator.tsx`

**Update training goals** (Lines ~115-125):
```tsx
<SelectContent>
  <SelectItem value="Goal 1">Your Custom Goal</SelectItem>
  <SelectItem value="Goal 2">Another Goal</SelectItem>
  // Add your mom's specific training goals
</SelectContent>
```

**Customize generated program** (Lines ~40-90):
Edit the template to match your mom's training methodology.

## 🌐 Domain & Hosting

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Add custom domain (optional)

### Option 2: Custom Domain

After deploying to Vercel:
1. Buy domain (e.g., from Namecheap, GoDaddy)
2. In Vercel settings → Domains
3. Add your domain
4. Update DNS records as instructed

## 📧 Email Integration

To make the contact form actually send emails:

### Option 1: EmailJS (Free)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Get your service ID, template ID, and user ID
3. Install: `npm install @emailjs/browser`
4. Update `components/contact-section.tsx`:

```tsx
import emailjs from '@emailjs/browser';

function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_USER_ID'
  ).then(() => {
    setIsSubmitted(true);
  });
}
```

### Option 2: Formspree (Easier)

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action:

```tsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

## 🔍 SEO Enhancements

### Add Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Create `app/layout.tsx` and add:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=YOUR_ID`}
  strategy="afterInteractive"
/>
```

### Add Structured Data

For better Google rankings, add to `app/layout.tsx`:

```tsx
<script type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Your Mom's Coaching Name",
    "description": "Professional swimming coach in Malaysia"
  }
`}
</script>
```

## 💡 Pro Tips

1. **Test on Real Devices**: View on phone, tablet, and desktop
2. **Ask for Feedback**: Show it to family/friends
3. **Monitor Performance**: Use [PageSpeed Insights](https://pagespeed.web.dev/)
4. **Regular Updates**: Keep content fresh with new testimonials/photos
5. **Backup Regularly**: Commit changes to GitHub frequently

## 🆘 Common Issues

### Issue: Components not showing
- Check browser console (F12) for errors
- Ensure all imports are correct

### Issue: Styles not applying
- Run `npm run dev` again
- Clear browser cache (Ctrl+Shift+R)

### Issue: Build errors
- Run `npm run build` to see specific errors
- Check all file names match imports (case-sensitive)

## 📞 Getting Help

- Check [Next.js Docs](https://nextjs.org/docs)
- Visit [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Search [Stack Overflow](https://stackoverflow.com/)

Remember: Take it step by step. Start with the priority changes, then gradually customize to make it perfect! 🎉

