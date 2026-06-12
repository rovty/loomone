# LUUMone Landing Page

A professional, responsive landing page for LUUMone (Pvt) Ltd - your trusted partner for engineering services. Built with HTML, CSS, and JavaScript.

## Features

✨ **Responsive Design** - Mobile-friendly and optimized for all devices
🎨 **Modern Styling** - Clean, professional design with smooth animations
📱 **Interactive Elements** - Smooth scrolling, mobile menu, form validation
⚡ **Performance** - Lightweight and fast-loading
🔧 **Easy Customization** - Simple to modify colors, content, and structure

## Files Structure

```
LUUMone/
├── index.html          # Main landing page
├── style.css           # Styling and responsive design
├── script.js           # JavaScript for interactivity
├── logo.png            # LUUMone logo
└── README.md           # This file
```

## Sections

1. **Navigation** - Sticky navbar with responsive mobile menu
2. **Hero** - Eye-catching banner with call-to-action
3. **About** - Company information with statistics
4. **Services** - Showcase of key services
5. **Contact** - Contact information and contact form
6. **Footer** - Copyright and social links

## Customization Guide

### Change Company Details
Edit the following in `index.html`:
- Company name and description in meta tags
- Contact information: Phone (0777331582), Location (No 07 Vauxhall Lane, Colombo 02)
- Services description and service cards
- Social media links in the footer

### Update Colors
Modify CSS variables in `style.css` (root section):
- `--primary-color`: Main brand color
- `--secondary-color`: Accent color
- `--text-dark`: Text color
- Other theme colors

### Add Content
- Edit section content directly in `index.html`
- Update service descriptions (currently: Engineering Design, Technical Solutions, Project Management, Innovation & Support)
- Modify about text and statistics for your company

### Change Logo
Replace `logo.png` with your own logo file (same path and filename)

## Deploying to GitHub Pages

### Method 1: Using GitHub Pages Repository

1. Create a repository named `<username>.github.io`
2. Clone the repository to your local machine
3. Copy all files from this project to the repository folder
4. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Add LUUMone landing page"
   git push origin main
   ```
5. Your site will be live at `https://<username>.github.io`

### Method 2: Using a Custom Domain (LUUMone.com)

1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository Settings
3. In your domain registrar, set up DNS records to point to GitHub Pages:
   - A records: Point to GitHub's IP addresses
   - CNAME record: Point to `<username>.github.io`
4. In repository settings, add your custom domain
5. Wait for DNS propagation (can take a few hours)

### Method 3: Using GitHub Pages with Custom Branch

1. Push code to a GitHub repository
2. Go to repository Settings → Pages
3. Select the branch and folder to deploy from
4. GitHub will automatically build and deploy your site

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

✓ The CSS and JavaScript are minified for production
✓ Images are optimized
✓ Uses modern, efficient CSS Grid and Flexbox
✓ Smooth animations using CSS transforms and transitions

## Future Enhancements

- [ ] Add blog section
- [ ] Implement newsletter signup
- [ ] Add product catalog
- [ ] Integrate with CMS
- [ ] Add testimonials section
- [ ] Multi-language support

## License

© 2026 LUUMone (Pvt) Ltd. All rights reserved.

## Support

For questions or issues, contact: info@LUUMone.com

---

**Last Updated:** June 12, 2026
