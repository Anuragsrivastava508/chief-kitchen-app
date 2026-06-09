# Chef's Kitchen 

A modern, responsive website for a chef's kitchen built with Next.js 14, TypeScript, and Tailwind CSS. This project features a complete kitchen website with authentication, blog system, documentation, and beautiful UI components.

## 🚀 Features

### Core Features
- **Modern UI/UX**: Clean, responsive design with dark/light theme support
- **Authentication System**: Sign in, sign up, forgot password, magic link authentication
- **Blog System**: MDX-powered blog with rich content and author profiles
- **Documentation**: Comprehensive documentation with navigation
- **Newsletter Subscription**: Email collection and management
- **Gallery**: Image gallery showcasing kitchen work
- **Expert Profiles**: Showcase kitchen experts and chefs
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Technical Features
- **Next.js 14**: Latest App Router with server components
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **NextAuth.js**: Authentication with multiple providers
- **React Hot Toast**: Beautiful toast notifications
- **AOS (Animate On Scroll)**: Scroll-triggered animations
- **React Slick**: Carousel/slider components
- **React Masonry**: Pinterest-style grid layouts

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 14.2.4** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Framer Motion 11.11.9** - Animation library
- **AOS 2.3.4** - Animate on scroll library
- **React Slick 0.30.2** - Carousel component
- **React Masonry CSS 1.0.16** - Masonry grid layout

### Content & Data
- **Gray Matter 4.0.3** - Front matter parsing for MDX
- **Remark 15.0.1** - Markdown processor
- **Remark HTML 16.0.1** - Markdown to HTML converter
- **Date-fns 3.4.0** - Date utility library

### Authentication & State
- **NextAuth.js 4.24.7** - Authentication library
- **Next Themes 0.3.0** - Theme management
- **React Hot Toast 2.4.1** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **PostCSS** - CSS processing

## 📁 Project Structure

```
chefs-kitchen-By Anurag
├── markdown/
│   └── blog/
│       ├── blog_1.mdx
│       ├── blog_2.mdx
│       └── ...
├── public/
│   └── images/
│       ├── cook/
│       ├── documentation/
│       ├── Expert/
│       ├── Features/
│       ├── Gallery/
│       ├── hero/
│       ├── logo/
│       └── Newsletter/
├── src/
│   ├── app/
│   │   ├── (site)/
│   │   │   ├── (auth)/
│   │   │   │   ├── signin/
│   │   │   │   └── signup/
│   │   │   └── documentation/
│   │   ├── api/
│   │   │   ├── data.tsx
│   │   │   └── contex/
│   │   │       └── ToasetContex.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── SocialSignIn.tsx
│   │   │   ├── SocialSignUp.tsx
│   │   │   ├── ForgotPassword/
│   │   │   ├── MagicLink/
│   │   │   ├── ResetPassword/
│   │   │   ├── SignIn/
│   │   │   └── SignUp/
│   │   ├── Breadcrumb/
│   │   ├── Common/
│   │   │   ├── Breadcrumb.tsx
│   │   │   ├── Loader.tsx
│   │   │   ├── PreLoader.tsx
│   │   │   └── ScrollUp.tsx
│   │   ├── Documentation/
│   │   │   ├── ColorConfiguraion.tsx
│   │   │   ├── Configuration.tsx
│   │   │   ├── DocNavigation.tsx
│   │   │   ├── Documentation.tsx
│   │   │   ├── Introduction.tsx
│   │   │   ├── LogoConfiguration.tsx
│   │   │   ├── PackageStructure.tsx
│   │   │   ├── QuickStart.tsx
│   │   │   └── TypographyConfiguration.tsx
│   │   ├── Home/
│   │   │   ├── Cook/
│   │   │   ├── Expert/
│   │   │   ├── Features/
│   │   │   ├── Gallery/
│   │   │   ├── Hero/
│   │   │   └── Newsletter/
│   │   ├── Layout/
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   │   ├── ThemeToggler.tsx
│   │   │   │   ├── Logo/
│   │   │   │   └── Navigation/
│   │   │   │       ├── HeaderLink.tsx
│   │   │   │       ├── menuData.tsx
│   │   │   │       └── MobileHeaderLink.tsx
│   │   ├── NotFound/
│   │   ├── ScrollToTop/
│   │   └── SharedComponent/
│   │       ├── Blog/
│   │       │   ├── blogCard.tsx
│   │       │   └── index.tsx
│   │       ├── HeroSub/
│   │       └── Volunteer/
│   ├── Style/
│   │   └── style.css
│   ├── types/
│   │   ├── blog.ts
│   │   ├── breadcrumb.ts
│   │   └── menu.ts
│   └── utils/
│       ├── markdown.ts
│       ├── markdownToHtml.ts
│       └── validateEmail.ts
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   <!-- later i will give you  -->
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🎨 Customization

### Theme Configuration

The application supports both light and dark themes. Theme switching is handled by `next-themes`.

### Color Scheme

Primary colors are defined in `tailwind.config.ts`:
- Primary: `#df6853` (Orange)
- Grey: `#363636` (Dark Grey)

### Typography

The application uses Poppins font from Google Fonts with weights 400, 500, 600, and 700.

## 🔧 Configuration

### Next.js Configuration

The `next.config.mjs` file contains Next.js-specific configurations. Currently set to default settings.

### Tailwind CSS Configuration

Custom configurations in `tailwind.config.ts`:
- Dark mode support with class strategy
- Custom color palette
- Extended spacing and border radius utilities

### TypeScript Configuration

Standard Next.js TypeScript configuration with path aliases:
- `@/*` maps to `./src/*`

## 📝 Content Management

### Blog Posts

Blog posts are written in MDX format and stored in `markdown/blog/`. Each post requires front matter with:
- `title`: Post title
- `excerpt`: Post excerpt
- `date`: Publication date
- `coverImage`: Cover image path
- `author`: Author name
- `authorImage`: Author profile image

### Images

Images are organized in `public/images/` with subdirectories for different sections:
- `cook/`: Cooking-related images
- `documentation/`: Documentation screenshots
- `Expert/`: Expert profile images
- `Features/`: Feature section images
- `Gallery/`: Gallery images
- `hero/`: Hero section images
- `logo/`: Logo and branding images
- `Newsletter/`: Newsletter section images

## 🔐 Authentication

The application uses NextAuth.js for authentication with support for:
- Email/password authentication
- Social sign-in providers
- Magic link authentication
- Password reset functionality

## 📱 Components

### Layout Components
- **Header**: Navigation with theme toggler and mobile menu
- **Footer**: Site footer with links and information
- **ScrollToTop**: Scroll to top button

### Home Page Components
- **Hero**: Main landing section
- **Features**: Key features showcase
- **Cook**: Cooking section
- **Expert**: Expert profiles
- **Gallery**: Image gallery
- **Newsletter**: Email subscription

### Authentication Components
- **SignIn/SignUp**: Authentication forms
- **SocialSignIn/SignUp**: Social authentication buttons
- **ForgotPassword**: Password recovery
- **ResetPassword**: Password reset form
- **MagicLink**: Magic link authentication

### Documentation Components
- **Documentation**: Main documentation page
- **DocNavigation**: Documentation sidebar navigation
- **Introduction**: Getting started guide
- **PackageStructure**: Project structure explanation
- **QuickStart**: Quick setup guide
- **Configuration**: Configuration options

### Shared Components
- **BlogCard**: Blog post preview card
- **Breadcrumb**: Navigation breadcrumbs
- **Loader**: Loading spinner
- **PreLoader**: Page preloader

## 🎭 Animations

The application uses multiple animation libraries:
- **Framer Motion**: Complex animations and page transitions
- **AOS**: Scroll-triggered animations
- **React Slick**: Carousel animations

## 📊 State Management

- **React Context**: Toast notifications context
- **Next Themes**: Theme state management
- **NextAuth.js**: Authentication state

## 🔍 SEO & Performance

- **Next.js Metadata API**: SEO optimization
- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Next.js automatic font optimization
- **Code Splitting**: Automatic code splitting

## 🧪 Testing

Currently, no testing framework is configured. Consider adding:
- Jest for unit testing
- React Testing Library for component testing
- Cypress for end-to-end testing

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Deployment Platforms

The application can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker** containers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and maintainers of the open-source libraries used

## 📞 Support

For support, please contact the development team or create an issue in the repository.

---

**Note**: This is a free version of the Chef's Kitchen Next.js template. For premium features and support, please check the official documentation or contact the developers.

## ❗ Pending Tasks (auto-generated)

The following items were discovered by a quick repo scan and should be addressed before production or client demos:

- **Replace broad `any` usages with proper TypeScript types**
   - Files with notable `any` usage: `src/utils/markdown.ts`, `src/components/Home/Menu/Menulist.tsx`, and several auth components.
- **Remove or replace `console.log` debug statements**
   - Examples: `src/components/Documentation/DocNavigation.tsx`, `src/app/api/newsletter/route.ts`.
- **Improve error handling in authentication components and API routes**
   - Several catches use `toast.error(error?.response?.data)` and `console.log` without typed handling: `src/components/Auth/*` (SignIn, SignUp, ForgotPassword, ResetPassword, MagicLink).
- **Validate and fix newsletter route**
   - Remove dev logging and return proper responses in `src/app/api/newsletter/route.ts`.
- **Add ESLint / TypeScript rules to catch issues**
   - Suggested rules: `no-console`, `@typescript-eslint/no-explicit-any`.
- **Audit and type `Menulist` and related order logic**
   - Ensure order creation (`placeOrder`) uses typed payloads and server validation.
- **Create tracked issues for remaining TODOs/FIXMEs**
   - Convert informal comments into GitHub issues with owners and priority.

If you want, I can start with any of the above (I recommend starting with typing `any` usages).

## 🧾 Client Presentation Template (for freelance prospects)

Use this template to present your site and services to potential clients. Copy into an email, PDF, or a simple landing page.

Title: Professional Website & Web App Services — Chef's Kitchen Demo

Greeting:

Hello [Client Name],

Introduction:

My name is [Your Name]. I build modern, responsive websites and web apps. I created the Chef's Kitchen demo to showcase the kind of work I deliver for freelance clients in the food, hospitality, and personal brand spaces.

What I built (quick highlights):

- Modern, responsive UI with light/dark theme support
- Full authentication (email, social, magic link, password reset)
- Blog system using MDX for rich content
- Documentation and admin-style pages
- Newsletter subscription and gallery features

Current status & readiness for clients:

- Production-ready UI and layout: ✅
- Auth flows: Partial — error handling and some type-safety improvements pending
- Newsletter: Needs dev-log removal and final testing
- Menu & ordering: Needs TypeScript typing and server-side validation

What I can deliver for you:

- A polished, branded version of the demo tailored to your content
- Secure authentication and user management
- Custom menu/order flows and admin panel
- SEO, performance tuning, and deployment to Vercel/Netlify

Estimated timeline & price (example):

- Discovery & design tweaks: 1 week
- Feature completion & testing: 2–3 weeks
- Final polish & deployment: 1 week
- Estimated cost: [₹ / $] depending on scope — provide budget to get a firm quote.

Call to Action:

If you like this demo, reply with a few details about your needs (pages, user actions, payment integration). I’ll send a short proposal and timeline.

Contact:

- Email: [your-email@example.com]
- Portfolio: [your-portfolio-link]

—

Need me to write a tailored proposal for a specific client or create a short demo video from this app? I can do that next.xx