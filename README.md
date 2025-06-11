# Gustavo Balaguera - Cybersecurity Portfolio

A modern, responsive portfolio website showcasing cybersecurity expertise, projects, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **Blog System**: Integrated blog for project documentation and insights
- **Contact Form**: Supabase-powered contact form with email fallback
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Ready**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Backend**: Supabase (Database, Authentication)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Awards.tsx      # Awards and recognition
│   ├── Blog.tsx        # Blog listing page
│   ├── BlogPost.tsx    # Individual blog post
│   ├── Contact.tsx     # Contact form and info
│   ├── Experience.tsx  # Work experience
│   ├── Footer.tsx      # Site footer
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing section
│   ├── Projects.tsx    # Featured projects
│   └── Skills.tsx      # Technical skills
├── lib/
│   └── supabase.ts     # Supabase client configuration
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🔧 Setup & Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for contact form and blog)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gustavo-balaguera-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Database Setup**
   
   Run the migration file in your Supabase SQL editor:
   ```sql
   -- Execute the contents of supabase/migrations/create_blog_tables.sql
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

## 🗄️ Database Schema

### Blog Posts Table
```sql
blog_posts (
  id uuid PRIMARY KEY,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text DEFAULT 'General',
  tags text[],
  featured_image text,
  read_time integer DEFAULT 5,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
)
```

### Contact Submissions Table
```sql
contact_submissions (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
)
```

## 🚀 Deployment

### Netlify Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variables in Netlify dashboard

3. **Environment Variables**
   Set these in your Netlify dashboard:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure environment variables on your hosting platform

## 🔒 Security Features

- **Row Level Security (RLS)** enabled on all Supabase tables
- **Input validation** on all forms
- **XSS protection** through proper escaping
- **HTTPS enforcement** in production
- **Content Security Policy** headers
- **Environment variable protection**

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Touch-friendly** interface
- **Optimized images** for different screen sizes

## ⚡ Performance Optimizations

- **Code splitting** with React Router
- **Lazy loading** for images
- **Optimized animations** with CSS transforms
- **Minimal bundle size** with tree shaking
- **CDN delivery** through Netlify
- **Compressed assets** in production

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Dark grays (#0f172a to #64748b)
- **Accent**: Various gradients for highlights

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Scale**: Responsive typography with clamp()

### Animations
- **Scroll animations**: Fade in, slide in from various directions
- **Hover effects**: Smooth transitions and transforms
- **Loading states**: Spinners and skeleton screens

## 📊 Analytics & SEO

- **Meta tags** for social sharing
- **Structured data** for search engines
- **Sitemap** generation ready
- **Performance monitoring** setup
- **Google Analytics** ready (add tracking ID)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**Gustavo Balaguera**
- Email: gustavobalaguera214@gmail.com
- LinkedIn: [linkedin.com/in/gbalaguera](https://linkedin.com/in/gbalaguera)
- GitHub: [github.com/gustavobalaguera](https://github.com/gustavobalaguera)

---

Built with ❤️ using React, TypeScript, and Supabase