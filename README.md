# AsciiCam
**AsciiCam** is a prototype project that converts live video feed from your webcam into ASCII art in real-time using JavaScript and p5.js.
This project demonstrates how to capture a video, process each pixels, and map brightness levels to characters in a density string to create an ASCII representation of the video.

This project started as a learning exercise in basic HTML and CSS during my first year of university, inspired by **The Coding Train**.

## Features
- Real-time conversion of webcam video feed to ASCII art
- Adjustable resolution and density strings for different levels of details
- Simple and minimalistic design using p5.js library

# Demo

# Usage
1. When you open the project in a browser, it will request access to your webcam.
2. Once access is granted, you'll see the live video feed converted into ASCII art.
3. In order to playing around with it, adjust the `density` string in `sketch.js` to change the detail level of the ASCII art.
4. You can use the image (e.g cat.jpg) and make it to ASCII art instead.

# File Structure
- index.html: The main HTML file that loads the project.
- sketch.js: The main JavaScript file containing the logic for converting video to ASCII.
- libraries/: Contains the p5.js library and additional p5.js sound library.
- cat.jpg & cat1.jpg: Example images used for testing (optional).
- .gitignore: Specifies which files and directories should be ignored by Git.
- jsconfig.json: Configuration file for JavaScript project settings (optional).

# Inspiration
This project was inspired by **The Coding Train**, a fantastic resource for learning creative coding with p5.js and other tools. It served as a fun and engaging way to learn the basics of HTML, CSS, and JavaScript during my first year of university.

