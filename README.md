# Data Visualization Dashboard

This project is a data visualization dashboard created using the MERN stack (MongoDB, Express, React, Node.js). It visualizes data from a MongoDB database based on a provided JSON file.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Screenshots]

## Project Overview

This dashboard provides interactive visualizations based on data from a MongoDB database. It includes various filters and charts to help users explore and analyze the data effectively.

### Features

- **Interactive Filters:** End year, topics, sector, region, PEST, source, SWOT, country, city.
- **Charts:** Creative visualizations using Rechart.js.
- **Data Fetching:** API endpoints for fetching and updating data.

## Installation

1. **Clone the Repository:**
   Download or clone the project files to your local machine.

2. **Navigate to the Project Directory:**

   ```bash
   cd path/to/your/project

   ```

3. **Install Dependencies:**
   npm install

4. **Set Up environmnet variables**
   MONGO_URL=mongodb://localhost:27017/your_database_name
   PORT=5000

## Usage

1. **Move to backend folder**
   cd backend

2. **Start the backend server**
   npm start

3. **In the current folder dashboard start the frontend server**
   npm start

4. **Access the Dashboard**
   Open your browser and navigate to http://localhost:3000 to view and interact with the dashboard.

## API Endpoints

GET /api/data: Retrieves the filtered data.
POST /api/data/filter: Filters data based on the provided criteria.

## Configuration

Ensure your .env file includes the following variables:
MONGO_URL=mongodb://localhost:27017/your_database_name
PORT=5000

## Screenshots

You can check the screenshots of the working project in Screenshots folder
