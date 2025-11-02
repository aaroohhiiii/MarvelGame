# 🌟 Chrono Chaos - Restore the Sacred Timeline

A Marvel-inspired interactive web game built with React + Vite, themed after the TVA (Time Variance Authority) from Loki.

## 🎯 Game Overview

**Chrono Chaos** is an immersive puzzle game where players must:
1. **Decrypt riddles** about Marvel characters and events
2. **Restore timeline fragments** by solving 10 Marvel-themed puzzles
3. **Arrange the Sacred Timeline** in correct chronological order
4. **Save the multiverse** from Kang's temporal chaos

## ✨ Features

- **🎨 TVA-Themed Design**: Retro-futuristic orange and teal color scheme
- **🖱️ Custom Glowing Cursor**: TVA-styled cursor with glow effects
- **🧩 Interactive Riddles**: 10 Marvel-themed riddles with image reveals
- **🔄 Drag & Drop Timeline**: Rearrange events chronologically
- **💫 Smooth Animations**: CSS-based animations and transitions
- **📱 Responsive Design**: Works on desktop, tablet, and mobile
- **⚡ Fast Performance**: Built with Vite for optimal speed

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd marvel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production
```bash
npm run build
npm run preview
```

## 🎮 How to Play

1. **🔍 Riddle Phase**: 
   - Read each riddle carefully
   - Type your answer in the input field
   - Click "DECRYPT" to reveal the character/event
   - Solve all 10 riddles to proceed

2. **⏰ Timeline Phase**:
   - Drag and drop the revealed fragments
   - Arrange them in chronological order
   - Click "VALIDATE TIMELINE" to check your answer

3. **🏆 Victory**:
   - Successfully arrange the timeline to restore order
   - Enjoy the TVA completion ceremony!

## 🛠️ Technical Stack

- **React 19**: Modern React with hooks
- **Vite**: Ultra-fast build tool and dev server
- **Plain CSS**: Custom TVA-themed styling with animations
- **ES6+**: Modern JavaScript features

## 🎨 Design System

### Colors
- **TVA Orange**: `#F68C1F` (Primary)
- **Temporal Teal**: `#00FFC8` (Accent)
- **TVA Background**: `#0B0B0B` (Dark)
- **Purple Gradient**: `#2E003E` (Cosmic)

### Typography
- **Headings**: Orbitron (Futuristic)
- **Body Text**: Share Tech Mono (Terminal-style)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx & .css
│   ├── GameGrid.jsx & .css
│   ├── RiddleCard.jsx & .css
│   ├── TimelineMode.jsx & .css
│   ├── CompletionModal.jsx & .css
│   └── CustomCursor.jsx
├── data/
│   └── riddles.js
├── assets/
│   └── characters/ (placeholder images)
├── App.jsx & App.css
├── main.jsx
└── index.css
```

## 🎯 Marvel Riddles Included

1. Captain America (1940s-2012)
2. Iron Man (2008)
3. Thor (2011)
4. Hulk (2008-2012)
5. Infinity Stones (Cosmic Era)
6. Black Panther (2016)
7. Doctor Strange (2016)
8. Ant-Man (2015)
9. Thanos (2018)
10. Endgame (2019)

## 🔧 Customization

### Adding New Riddles
Edit `src/data/riddles.js`:
```javascript
{
  id: 11,
  clue: "Your riddle text here...",
  answer: "Correct Answer",
  image: "/src/assets/your-image.jpg",
  order: 11,
  timelinePeriod: "2020"
}
```

### Styling
- Global theme variables in `src/App.css`
- Component-specific styles in individual `.css` files
- TVA color scheme easily customizable

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## 📄 License

This project is for educational purposes. Marvel characters and references are property of Marvel Entertainment.

## 🏫 Created By

**Keynote Club × TVA Hack Team | IIIT Sri City 2025**

---

*"For all time. Always." - TVA Motto*

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
