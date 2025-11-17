document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.querySelector(".share-icon");

  /* Problem Page */

  const sharePopup = document.getElementById("shareSquare");
  const closeShare = document.querySelector(".close-share");

  if (shareBtn && sharePopup && closeShare) {
    shareBtn.addEventListener("click", () => {
      sharePopup.classList.toggle("active");
    });

    closeShare.addEventListener("click", () => {
      sharePopup.classList.remove("active");
    });
  }

  /* Solution Page */
  
  const shareSheet = document.getElementById("shareSheet");
  const closeSheet = document.querySelector(".close-sheet");

  if (shareBtn && shareSheet && closeSheet) {
    shareBtn.addEventListener("click", () => {
      shareSheet.classList.add("active");
    });

    closeSheet.addEventListener("click", () => {
      shareSheet.classList.remove("active");
    });
  }
});