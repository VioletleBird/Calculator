const body = document.getElementById("bodyAll");
const toggle = document.getElementById("toggle-switch");

toggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('theme-002');
        body.classList.remove('theme-001');
    }
    else {
        body.classList.add('theme-001');
        body.classList.remove('theme-002');
    }
});
