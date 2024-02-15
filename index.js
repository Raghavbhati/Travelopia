const open_popUP = document.getElementById("open_popup");
const close_Popup = document.getElementById("close_popup");
const popup = document.getElementsByClassName("hero_popUP")[0];
const overlay =document.getElementById("overlay");

open_popUP.addEventListener("click", () => {
    popup.classList.add("pop_Active");
    overlay.style.display = "block";
});

close_Popup.addEventListener("click", () => {
    popup.classList.remove("pop_Active");
    overlay.style.display = "none";
});
