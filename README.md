# Recipe Cards

A simple React app that displays a collection of recipe cards with images, descriptions, ingredients, and dietary tags.

## Features

- Responsive grid layout for recipe cards
- Each card shows:
  - Recipe image
  - Title and description
  - Cooking time and difficulty
  - Dietary tags (e.g., Vegetarian, Vegan, Gluten-Free)
  - Ingredients (with a default message if not specified)
- Modern, clean styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/recipe-cards.git
   cd recipe-cards
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

```bash
npm start
# or
yarn start
```

The app will open in your browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  components/
    recipe-card.jsx
    recipe-card.css
  App.jsx
  App.css
  index.js
  index.css
public/
  images/
    spaghetti-carbonara.jpg
    QuinoaSalad.jpg
    ...
```

## Customization

- Add or edit recipes in `src/App.jsx`.
- Place your recipe images in the `public/images` folder and update the image paths.
- Adjust styles in `src/App.css`, `src/index.css`, and `src/components/recipe-card.css`.
