# National Graphic E-commerce Platform

## Description
Architecture and maintenance of a nationwide e-commerce platform for the printing industry, enabling clients across Brazil to order customized print materials (cards, flyers, banners, packaging) through an online configurator. The platform integrated automatic price calculation based on technical specifications (size, paper type, finishing, quantity), an art approval workflow, and production integrated with the factory floor. Developed with CodeIgniter and MySQL, hosted on AWS.

## Image Prompt
"Graphic e-commerce platform with 3D product configurator, client customizing business card online, real-time design preview, production dashboard with order status, industrial printing machines in background, integration diagram between online store and factory floor, vibrant CMYK colors, modern industrial design, 4k"

## Challenges
- **Extremely complex product configurator** — each print material type had dozens of variables (format, paper, weight, finishing, quantity) affecting price non-linearly
- **Real-time price calculation** — over 10k possible combinations per product, requiring a performant pricing engine
- **Production integration** — approved orders needed to feed directly into the factory's production system
- **File upload and validation** — receiving print-ready PDFs and technically validating them (resolution, color, bleed, fonts)
- **Platform maintenance for 5+ years** while the market and technologies evolved
- **Team leadership** — mentoring junior developers and coordinating deliveries

## Solutions
- Developed **PHP pricing engine** with an optimized decision tree and caching of frequent results in MySQL
- Implemented **automatic PDF validation** with PHP libraries to check technical specifications before production submission
- Created **production system integration API** (graphic ERP), reducing manual intervention by 90%
- Built **complete admin panel** for order management, production, and management reports
- Led **gradual migration to AWS**, improving scalability and availability
- Established **code review and testing processes** that maintained quality despite the system's constant evolution

## Trade-offs
- **CodeIgniter (monolith) vs. Modernization**: Keeping the monolith was safer for a critical system with 5+ years of operation, but made adopting new technologies harder; modernization was done gradually in peripheral modules
- **Server-side vs. Client-side pricing**: Server-side calculation ensured consistency and security but added latency; we implemented aggressive caching to keep the experience smooth
- **Customization vs. Standardized product**: Offering many personalization options was the competitive differentiator, but exponentially increased configurator complexity and order error rates

## Results & Gains
- **Nationwide operation** — clients in all Brazilian states
- **5k+ orders/month** processed at peak
- **90% reduction** in manual intervention between order and production
- **System operated for 7+ years** with continuous evolution without requiring a rebuild
- **3 junior developers mentored** who grew to mid-level positions during the period
- **Average 20% annual revenue growth** for the company following the platform's evolution

## Timeline
**Period:** October 2009 - June 2016
**Duration:** 6 years and 9 months
