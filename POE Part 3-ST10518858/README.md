# Motlapz Tech School - POE Part 3 (WEDE5020)
Student: [Your Name] - [Student Number]
Location Focus: Pretoria, South Africa
Live URL: http://127.0.0.1:5500/index.html (Localhost via Live Server)

## Project Overview
Motlapz Tech School website redesign for Part 3 to meet modern web standards.
Focused on IT courses: Cyber Security (R3500), Networking N+ (R2800), 
Software Development (R4000), IT Management (R3200).

## Part 3 Improvements Implemented
1. SEO: 
   - Title tags optimized with "Pretoria" and "IT Courses"
   - Meta description & keywords on all 5 pages
   - sitemap.xml and robots.txt added
   - Heading hierarchy fixed (1x h1 per page)
2. JavaScript Interactivity:
   - Dynamic content loading from services array in js/main.js
   - Cost Calculator: calculateCost() - checks price x quantity + availability
   - Form validation: HTML5 required + pattern + JS preventDefault
   - Interactive Map: Leaflet.js showing Pretoria (-25.7479, 28.2293)
3. Responsive Design: CSS Grid and Flexbox, media queries in css/style.css

## Folder Structure
/ (root)
├── index.html
├── about.html
├── services.html
├── enquiries.html
├── contact.html
├── css/style.css
├── js/main.js
├── images/
├── sitemap.xml
├── robots.txt
└── README.md

## How to Run
1. Open folder in VS Code
2. Right-click index.html > Open with Live Server
3. Navigate to 127.0.0.1:5500

## References
- Leaflet Maps: https://leafletjs.com/
- W3Schools - HTML Forms & Validation
- MDN Web Docs - JavaScript Array Methods
- OpenStreetMap Tiles for Pretoria map

