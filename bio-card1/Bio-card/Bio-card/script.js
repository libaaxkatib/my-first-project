const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const STORAGE_KEY = "preferred-theme";
function handleToggleClick() {
    const isDarkNow = body.classList.toggle("dark");
    if (isDarkNow) {
        toggleButton.textContent = " 🌑Light mode";
        localStorage.setItem(STORAGE_KEY, "dark");
    } else {
        toggleButton.textContent = "🌙 Dark mode";
        localStorage.setItem(STORAGE_KEY, "light");
    }

}
toggleButton.addEventListener("click", handleToggleClick);
function loadSavedTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme === "dark") {
        body.classList.add("dark");
        toggleButton.textContent = " 🌑Light mode";
    } else {
        toggleButton.textContent = "🌙 Dark mode";
    }
}

loadSavedTheme();