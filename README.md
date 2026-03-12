# 2 Minute Reset - Wellness Tool

A complete single-page wellness tool designed to help stressed users calm their mind through a short interactive experience. Perfect for embedding in a tea brand website.

## Features

- **5-Step Wellness Experience:**
  - 🫁 **Breathing Challenge**: 20-second animated breathing exercise with 8-second cycle
  - 🎯 **Focus Reset Game**: Stroop-style color matching game with 5 rounds
  - 💬 **Talk it Out**: Voice and text input for sharing thoughts with supportive responses
  - 📊 **Stress Reset Score**: Personalized assessment based on performance
  - ☕ **Tea Ritual**: Call-to-action for butterfly pea tea

- **Interactive Elements**: Voice recognition, timers, scoring system, and smooth animations
- **Smart Response System**: Analyzes user input and provides calming suggestions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean wellness app aesthetic with calming color palette

## Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, or Edge)
- No installation or build process required

### Running the Website

1. **Option 1: Open directly in your browser**
   - Navigate to the project folder in VS Code
   - Right-click on `index.html`
   - Select "Open with Live Server" (if Live Server extension is installed)

2. **Option 2: Using a local server**
   ```bash
   # Python 3
   python -m http.server 8000

   # Or Python 2
   python -m SimpleHTTPServer 8000

   # Or Node.js (with http-server)
   npx http-server
   ```
   Then visit `http://localhost:8000` in your browser

3. **Option 3: Direct file opening**
   - Simply double-click `index.html` to open it in your default browser

## Project Structure

```
2 Minute Reset/
├── index.html       # Complete single-page application (HTML, CSS, JS)
└── README.md        # This file
```

## How to Use

1. **Start**: Click "Start My Reset" to begin the 2-minute wellness journey
2. **Breathe**: Follow the 20-second animated breathing exercise
3. **Focus**: Play the 5-round color matching game within time limits
4. **Vent**: Share your thoughts via text or voice input
5. **Score**: Receive your personalized stress reset assessment
6. **Complete**: Explore the tea ritual recommendation

## Experience Flow

### Step 1: Breathing Challenge
- Large animated circle expands/contracts in 8-second cycles
- 20-second countdown timer
- Instructions: "Inhale slowly as the circle expands. Exhale slowly as it contracts."

### Step 2: Focus Reset Game
- "Click the COLOR of the word, not the word itself"
- 5 rounds with 3-second timer each
- Score and Focus Streak tracking
- Timeout message: "Too slow. Reset your focus."

### Step 3: Talk it Out
- Text area for sharing thoughts
- 🎤 Voice input button using Web Speech API
- Smart response system analyzes stress words
- Calming suggestions based on user input

### Step 4: Stress Reset Score
- Calculates based on breathing completion, focus performance, and message sentiment
- Displays Stress Level (Low/Medium/High) and Focus Level
- Personalized recommendations

### Step 5: Tea Ritual
- "Complete Your Reset Ritual"
- Promotes butterfly pea tea
- "Explore the Blue Tea Ritual" call-to-action

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: Interactive functionality with Web Speech API

### Browser Support
- Chrome/Chromium: ✅ Full support (recommended for voice features)
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- Mobile browsers: ✅ Fully responsive

### Key Features
- **Voice Recognition**: Web Speech API for hands-free input
- **Smart Responses**: Context-aware calming suggestions
- **Performance Scoring**: Algorithm-based stress level assessment
- **Smooth Animations**: CSS transitions and keyframe animations
- **Mobile-First**: Responsive design for all screen sizes

## Customization

### Modify Game Settings
Edit the JavaScript in `index.html`:
```javascript
// Change number of focus game rounds
const TOTAL_ROUNDS = 5;

// Adjust breathing duration
let breathingDuration = 20;

// Modify stress word detection
const stressWords = ['stress', 'overwhelmed', 'tired', 'anxious', 'angry'];
```

### Change Colors
Edit the CSS variables in the `<style>` section:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --accent-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --background: linear-gradient(135deg, #f0f4f8 0%, #e1e8ed 100%);
}
```

### Customize Responses
Modify the response arrays in the JavaScript:
```javascript
const suggestions = [
    'Try taking a few more slow breaths to calm your body.',
    'Take a short break and step away for a few minutes.',
    // Add your custom responses here
];
```

## Design Philosophy

The design follows modern wellness app principles:
- **Calming Colors**: Soft blue and teal gradients
- **Clean Typography**: System font stack for readability
- **Rounded Elements**: Gentle, approachable aesthetics
- **Subtle Shadows**: Depth without overwhelming
- **Smooth Transitions**: Fluid user experience
- **Progressive Disclosure**: One step at a time

## Integration

This tool is designed to be embedded in a tea brand website. The final "Tea Ritual" step provides a natural transition to product recommendations.

### Embedding Instructions
```html
<iframe src="path/to/index.html" width="100%" height="600" frameborder="0"></iframe>
```

## Future Enhancements

Potential features for future versions:
- Session history and progress tracking
- Multiple language support
- Customizable exercise durations
- Integration with health tracking apps
- Advanced voice analysis for better responses
- Dark mode toggle
- Sound/music background options

## License

This project is open source and available for personal and commercial use.

## Support

For issues or suggestions, please refer to the project repository or contact the development team.

---

**Remember**: Taking 2 minutes for yourself is never wasted time. It's an investment in your wellbeing. 🌟
