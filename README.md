# Glow at Home - Beauty Services Website

A professional, responsive website for beauty and wellness services delivered at home in Kota, Rajasthan.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Service Showcase**: Display 6 main service categories:
  - Hair Services
  - Makeup Services
  - Nail Services
  - Skin Services
  - Threading & Hair Removal
  - Massage Services

- **User Authentication**: Login and Sign Up modals
- **Booking System**: Simple booking form for each service
- **About Section**: Information about the business
- **Contact Form**: Get in touch with customers
- **Smooth Navigation**: Easy-to-use navigation with smooth scrolling
- **Modern UI**: Beautiful gradient designs and animations

## 📁 Project Structure

```
Parlour-website/
├── index.html          # Main HTML file with page structure
├── styles.css          # All CSS styling and responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: View Locally
1. Clone or download this repository
2. Open `index.html` in your web browser
3. The website will load with all styles and functionality

### Option 2: Deploy to GitHub Pages
1. Go to repository Settings
2. Scroll to "GitHub Pages" section
3. Select "main" branch as source
4. Your site will be available at: `https://laxmikhandelwal690-svg.github.io/Parlour-website`

### Option 3: Deploy to Other Hosting
- Upload all files (index.html, styles.css, script.js) to your hosting provider
- Ensure all three files are in the same directory

## 🎨 Customization

### Change Business Details
Open `index.html` and update:
- Business name (currently "Glow at Home")
- Phone number in Contact section
- Email address
- Location/City details

### Modify Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #d946a6;      /* Main pink color */
    --secondary-color: #ec4899;    /* Secondary pink */
    --dark-color: #1f2937;         /* Dark text */
    --light-color: #f3f4f6;        /* Light backgrounds */
}
```

### Add More Services
1. Copy a service card in `index.html`
2. Change the icon, title, and service list items
3. Update the onclick function with new service name

## 🔄 How It Works

### Modals
- **Login Modal**: Opens when "Login" button is clicked
- **Sign Up Modal**: Opens when "Sign Up" button is clicked
- **Booking Modal**: Opens when "Book Now" on any service is clicked

### Forms
Currently, all forms show confirmation alerts. To connect to a backend:
1. Create a backend API (Node.js, Python, PHP, etc.)
2. Modify form submission handlers in `script.js`
3. Add payment gateway integration as needed

### Navigation
- Smooth scrolling between sections
- Responsive mobile menu with hamburger icon
- Active section highlighting

## 📱 Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile Browsers (iOS Safari, Chrome Android)

## 🔧 Next Steps

### Phase 2 - Backend Setup
- Create user database (MySQL/MongoDB)
- Setup authentication system
- Create booking management system
- Setup email notifications

### Phase 3 - Payment Integration
- Add Razorpay/PayPal integration
- Implement secure payment processing
- Add order tracking

### Phase 4 - Admin Panel
- Service provider dashboard
- Booking management
- Customer reviews and ratings
- Analytics

### Phase 5 - Mobile App
- React Native or Flutter app
- Push notifications
- In-app booking and payments

## 📧 Contact & Support

For modifications and improvements:
- Email: info@glowathome.com
- Phone: +91-XXXXXXXXXX
- Location: Kota, Rajasthan

## 📝 License

This project is open source and available for personal and commercial use.

## 🎯 SEO Optimization Tips

To improve search engine ranking:
1. Update meta descriptions in HTML
2. Add structured data (schema.org)
3. Optimize images with alt text
4. Create blog content
5. Get Google Business listing

---

**Version**: 1.0  
**Last Updated**: May 31, 2024  
**Status**: Ready for Deployment ✅
