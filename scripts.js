document.getElementById("contactBtn").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "none";
});

window.onclick = function(event) {
    if (event.target == document.getElementById("popupForm")) {
        document.getElementById("popupForm").style.display = "none";
    }
};
