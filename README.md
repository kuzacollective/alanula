# Alanula - Local Service Provider Platform

Alanula is the fastest, easiest way to find and book trusted local service providers in Mauritius. We help everyday pros build visibility and grow their income—while helping clients find great help, fast.

## 🚀 Features

- **Browse Local Pros**: Discover verified service providers across Mauritius
- **Direct WhatsApp Booking**: Connect instantly with pros via WhatsApp
- **Review System**: Rate and review services to help the community
- **Admin Dashboard**: Manage pro listings and monitor platform activity
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode**: Toggle between light and dark themes for better user experience

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: React hooks + TanStack Query
- **Routing**: React Router DOM
- **Data Source**: Airtable (via Make.com webhooks)
- **Deployment**: GitHub Pages

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kuzacollective/alanula-pros.git
cd alanula-pros
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
VITE_MAKE_WEBHOOK_URL=https://hook.eu2.make.com/your-webhook-url-here
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── admin/          # Admin-specific components
│   ├── directory/      # Pro listing components
│   ├── landing/        # Landing page sections
│   └── ui/            # Base UI components (shadcn/ui)
├── hooks/              # Custom React hooks
├── pages/              # Route components
├── utils/              # Utility functions
├── mocks/              # Mock data for development
└── constants/          # App constants and filters
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### GitHub Pages (Automatic)

This repository is configured for automatic deployment to GitHub Pages:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at: `https://kuzacollective.github.io/alanula-pros/`

### Manual Deployment Steps

If you need to set up the repository from scratch:

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Alanula platform"
git branch -M main
git remote add origin https://github.com/kuzacollective/alanula-pros.git
git push -u origin main
```

Then enable GitHub Pages:
1. Go to repository Settings → Pages
2. Under Source, select "GitHub Actions"
3. The workflow will automatically deploy your app

## 🔗 Data Integration

The application integrates with Airtable via Make.com webhooks:

1. **Airtable**: Stores pro profiles and service data
2. **Make.com**: Provides webhook endpoints for data fetching
3. **Frontend**: Fetches data via REST API calls

To set up your own data source:
1. Create an Airtable base with pro profiles
2. Set up a Make.com scenario to expose the data
3. Update `VITE_MAKE_WEBHOOK_URL` in your environment

## 🎨 Design System

The app uses a custom design system built on Tailwind CSS:

- **Primary Color**: #F5B400 (Golden yellow)
- **Secondary Color**: #2E2E2E (Dark gray)
- **Accent Color**: #00C88F (Teal green)
- **Fonts**: Inter (body), Poppins (headings)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **WhatsApp**: +230 5917 0001
- **Email**: hello@alanula.mu
- **Website**: https://alanula.mu

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Hosted on [GitHub Pages](https://pages.github.com/)

---

Made with ❤️ for the Mauritian community by Kuza Collective