
# Crypto Price Tracker

A real-time cryptocurrency price tracking application built with React and Redux Toolkit.

## Features

- Displays real-time cryptocurrency price data
- Simulates WebSocket connections for live updates
- Fully responsive design
- Complete state management with Redux Toolkit
- Color-coded price movements

## Tech Stack

- React
- Redux Toolkit (for state management)
- TypeScript
- Tailwind CSS (for styling)
- React Router (for navigation)

## Architecture

This application follows a modern React architecture with Redux Toolkit for state management:

- **Components**: UI elements that display crypto data
- **Redux Store**: Central state management with slices
- **WebSocket Simulator**: Simulates real-time data updates
- **Selectors**: Optimized data access from Redux store

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser at: http://localhost:8080

## How It Works

- The app starts by loading mock crypto data into the Redux store
- A WebSocket simulator updates random assets every 1-2 seconds
- All updates flow through Redux actions
- The UI automatically updates when state changes

## Future Enhancements

- [ ] Real WebSocket integration (e.g., Binance API)
- [ ] Filtering and sorting options
- [ ] Persistent state with localStorage
- [ ] Detailed asset views
- [ ] Historical data charts

## Demo

![Crypto Tracker Demo](demo.gif)
