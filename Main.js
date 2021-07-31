import { renderCalculationsTo } from "./scripts/calculation/Calculation.js";

window.onCalculateButtonClick = function () {
    renderCalculationsTo(document.getElementById('calculations'));
    document.getElementById('output').style.display = 'table';
};