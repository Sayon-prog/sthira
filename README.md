# 2 Minute Reset - Wellness Website

A beautiful single-page wellness website designed to provide quick, guided wellness exercises and mindfulness practices. Take a 2-minute break anytime you need to reset and recharge.

## Features

- **Four Wellness Exercises:**
  - 🫁 **Breathing**: Box breathing technique to calm your nervous system
  - 🧘 **Meditation**: Guided mindfulness practice
  - 🤸 **Stretching**: Gentle full-body stretches
  - 🙏 **Gratitude**: Reflection practice for positivity

- **Interactive Timer**: 2-minute countdown with pause/reset controls
- **Progress Tracking**: Visual progress bar during exercises
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations

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
├── index.html       # Main HTML structure
├── styles.css       # Styling and responsive design
├── script.js        # Interactive functionality
└── README.md        # This file
```

## How to Use

1. **Select an Exercise**: Click on any of the four exercise cards (Breathing, Meditation, Stretch, or Gratitude)
2. **Read Instructions**: Follow the guided instructions for your chosen exercise
3. **Start the Timer**: Click the "Start" button to begin the 2-minute session
4. **Complete Your Session**: The timer will countdown to zero and display a completion message
5. **Return to Menu**: Click "Back" to return to the exercise selection menu

## Customization

### Modify Exercise Content
Edit the `exercises` object in `script.js` to customize:
- Exercise titles
- Duration (default: 120 seconds)
- Instructions

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --accent-color: #f59e0b;
    /* ...other colors... */
}
```

### Add New Exercises
Add a new entry to the `exercises` object in `script.js`:
```javascript
newExercise: {
    title: 'Exercise Name',
    duration: 120,
    instructions: `<p>Instructions here</p>`
}
```

Then add a corresponding card in the HTML grid in `index.html`.

## Browser Compatibility

- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- Mobile browsers: ✅ Fully responsive

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, gradients, animations
- **Vanilla JavaScript**: Pure JS, no frameworks or dependencies

## Features in Detail

### Responsive Design
The website uses CSS Grid and Flexbox to adapt beautifully to any screen size:
- Desktop: 4-column exercise grid
- Tablet: Adjustable columns
- Mobile: 2-column or single-column layout

### Timer Functionality
- Start/Pause controls for flexibility
- Reset to start over
- Automatic completion message
- Real-time progress bar

### Accessibility
- Clear, readable typography
- High contrast ratios
- Keyboard-friendly interface
- Semantic HTML structure

## Tips for Success

- Find a quiet space for your exercise
- Silence your notifications
- Sit comfortably with good posture
- Focus on the present moment
- Repeat regularly for best results

## Future Enhancements

Potential features for future versions:
- Sound/music background
- Session history and statistics
- Custom exercise duration
- Daily reminders
- Multiple language support
- Dark mode toggle

## License

This project is open source and available for personal and commercial use.

## Support

For issues or suggestions, please refer to the project repository or contact the development team.

---

**Remember**: Taking 2 minutes for yourself is never wasted time. It's an investment in your wellbeing. 🌟
