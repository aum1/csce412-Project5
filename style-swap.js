var isSecondStyle = true;
function toggleStyle() {
    isSecondStyle = !isSecondStyle;
    if (isSecondStyle) {
        document.getElementById("stylesheet-swapper").setAttribute("href", "combined_professional_styles.css");
    }
    else {
        document.getElementById("stylesheet-swapper").setAttribute("href", "combined_fun_styles.css");
    }
}
