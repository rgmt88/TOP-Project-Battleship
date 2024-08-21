import './styles.css';
import { createGrid } from "./createGrid.js";

document.addEventListener('DOMContentLoaded', (event) => {
    // Ensures DOM content is fully loaded before attempting to update the UI
    createGrid();
})

console.log('Webpack is working!');