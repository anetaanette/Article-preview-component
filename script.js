const shareWrapper = document.querySelector(".share-wrapper");
const shareBubble = document.querySelector(".share_bubble");

shareWrapper.addEventListener("click", function () {
    shareBubble.classList.toggle("active");
});