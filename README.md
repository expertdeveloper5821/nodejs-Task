# Horizontal Chart with Zooming 
This is a React application that displays a horizontal bar chart using Chart.js library with the ability to zoom and pan and also allows exporting the data to a CSV file.

# Getting Started
- clone the Respository
- install the dependencies using the command 
# npm install
- start the development server using the command 
# npm start

- open the browser and navigate to http://localhost:3000 to see the application running.

# Dependencies
This project relies on the following dependencies:
React: A JavaScript library for building user interfaces.
Chart.js: A popular charting library for creating interactive charts.
react-chartjs-2: A React wrapper for Chart.js to easily integrate with React applications.
file-saver: A library to save files on the client-side.

# How to Use
The chart is displayed with data fetched from the API located at https://nodejs-task-be.vercel.app/v1/data. The API returns data for each day of the week.
The chart supports zooming and panning along both the X and Y axes. Use the mouse wheel to zoom in/out and click and drag to pan the chart.
Click the "Export CSV" button to export the chart data to a CSV file named "chart_data.csv".

