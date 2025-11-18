document.addEventListener("DOMContentLoaded", () => {
  try {
    console.log("Share UI script loaded.");

    // Metric: times clicked
    let shareClickCount = 0;

    // All pages have a share icon
    const shareBtn = document.querySelector(".share-icon");
    if (!shareBtn) throw new Error("Share button not found on this page.");

    // Problem page popup

    const sharePopup = document.getElementById("shareSquare");
    const closeShare = document.querySelector(".close-share");

    if (sharePopup && closeShare) {
      console.log("Problem page detected: initializing popup behavior.");

      shareBtn.addEventListener("click", () => {
        shareClickCount++;
        console.log(
          `Problem page: share clicked ${shareClickCount} time(s).`
        );
        sharePopup.classList.toggle("active");
      });

      closeShare.addEventListener("click", () => {
        sharePopup.classList.remove("active");
      });
    }

    // Solution page slide-up sheet
    
    const shareSheet = document.getElementById("shareSheet");
    const closeSheet = document.querySelector(".close-sheet");

    if (shareSheet && closeSheet) {
      console.log("Solution page detected: initializing slide-up sheet.");

      shareBtn.addEventListener("click", () => {
        shareClickCount++;
        console.log(
          `Solution page: share clicked ${shareClickCount} time(s).`
        );
        shareSheet.classList.add("active");
      });

      closeSheet.addEventListener("click", () => {
        shareSheet.classList.remove("active");
      });
    }

  } catch (error) {
    console.error("Error initializing share UI:", error);
  }
});
