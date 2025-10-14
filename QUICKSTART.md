# Quick Start Guide

## 🚀 Getting Your Website Running

### Step 1: Install Dependencies

Open your terminal in this project folder and run:

```bash
npm install
```

This will install all the necessary packages.

### Step 2: Run the Development Server

```bash
npm run dev
```

### Step 3: View Your Website

Open your browser and go to: **http://localhost:3000**

You should see your beautiful swimming coach website! 🏊‍♀️

## 📝 Customization Checklist

### Essential Updates

- [ ] **Replace "SwimPro" with your mom's actual business name** in:
  - `components/navigation.tsx` (line 30)
  - `components/footer.tsx` (line 9)
  - `app/layout.tsx` (title and description)

- [ ] **Update Contact Information** in `components/contact-section.tsx`:
  - [ ] Email address (currently: coach@swimpro.my)
  - [ ] Phone number (currently: +60 12-345-6789)
  - [ ] Location (currently: Kuala Lumpur, Malaysia)
  - [ ] Operating hours

- [ ] **Customize Statistics** in `components/hero-section.tsx`:
  - [ ] Years of experience
  - [ ] Number of students trained
  - [ ] Other achievements

### Optional Enhancements

- [ ] Add real images (replace emoji placeholders)
- [ ] Update service descriptions to match your mom's specific offerings
- [ ] Modify color scheme (in `app/globals.css`)
- [ ] Add social media links in footer
- [ ] Connect a real email service for form submissions

## 🎨 Changing Colors

To change the primary color (currently blue):

1. Open `app/globals.css`
2. Find the `--primary` variable
3. Use a tool like [UIColors](https://uicolors.app/) to generate HSL values
4. Replace the value

## 📸 Adding Real Images

1. Place your images in the `/public` folder
2. Install the Next.js Image component (already included)
3. Replace placeholders in components with:

```tsx
import Image from 'next/image';

<Image 
  src="/your-image.jpg" 
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## 🌐 Deploying Your Website

### Option 1: Vercel (Easiest - Free)

1. Create account at [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub repository
4. Click "Deploy"
5. Done! You'll get a free URL like `yoursite.vercel.app`

### Option 2: Netlify (Alternative - Free)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Done!

## 💡 Tips

- The website is fully responsive (works on phones, tablets, and computers)
- All forms are simulated - connect a backend service like [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/) for real submissions
- The Program Generator is client-side only - consider connecting it to an AI service for real personalization

## 🆘 Need Help?

- Check the main README.md for detailed documentation
- All components are in the `/components` folder
- Styling uses Tailwind CSS - [learn more](https://tailwindcss.com/docs)

## 📱 Testing on Mobile

To test on your phone while developing:

1. Find your computer's local IP address
2. Run `npm run dev`
3. On your phone, open: `http://YOUR_IP:3000`

Enjoy your new website! 🎉

