# Aksha's Portfolio Website

A modern, animated portfolio website built with React.js and GSAP animations.

## Features

- 🎨 Modern, clean UI with tech-oriented color palette
- ✨ Smooth GSAP animations and scroll effects
- 📱 Fully responsive design for mobile and desktop
- 🚀 Fast loading and optimized performance
- 💼 Professional sections: Hero, About, Skills, Projects, Contact

## Technologies Used

- **Frontend**: React.js (JSX)
- **Animations**: GSAP (GreenSock Animation Platform)
- **Styling**: Custom CSS with modern design principles
- **Icons**: Emoji-based icons for better performance
- **Fonts**: Inter font family from Google Fonts

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory:
   ```bash
   cd Portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

## Project Structure

```
Portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js & Navbar.css
│   │   ├── Hero.js & Hero.css
│   │   ├── About.js & About.css
│   │   ├── Skills.js & Skills.css
│   │   ├── Projects.js & Projects.css
│   │   └── Contact.js & Contact.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Customization

### Personal Information
Update the following in the respective components:
- **Hero.js**: Name and role description
- **About.js**: Bio, education details, and personal information
- **Contact.js**: Email, LinkedIn, GitHub links

### Projects
Modify the `projects` array in **Projects.js** to showcase your own projects.

### Skills
Update the `technicalSkills` and `softSkills` arrays in **Skills.js** with your expertise.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Deployment

To deploy this portfolio:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your preferred hosting service (Netlify, Vercel, GitHub Pages, etc.)

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Aksha**
