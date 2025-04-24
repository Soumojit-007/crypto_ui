
# Crypto Price Tracker

A real-time cryptocurrency price tracking application built with React and Redux Toolkit.

[![Demo Video](https://img.shields.io/badge/▶-Watch_Demo-FF0000?style=flat-square)](https://www.loom.com/share/be5ba282363c4ce98f50be9e0c9aed6b?sid=5194b7a9-2093-487f-89e0-8f6beaaa203b)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
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

## 🏗 Architecture Flow
```mermaid
graph LR
    A[WebSocket Simulator] -->|dispatch| B[Redux Store]
    B -->|provide| C[Components]
    C -->|select| D[Selectors]
    D --> B
    E[Mock Data] --> B
