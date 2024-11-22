document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    const modal = document.createElement("div");
    const modalImg = document.createElement("img");
    const closeBtn = document.createElement("span");

    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.zIndex = "1000";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgba(0,0,0,0.8)";
    modal.style.textAlign = "center";

    closeBtn.innerHTML = "&times;";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "20px";
    closeBtn.style.right = "35px";
    closeBtn.style.color = "#fff";
    closeBtn.style.fontSize = "40px";
    closeBtn.style.cursor = "pointer";

    modalImg.style.marginTop = "5%";
    modalImg.style.maxWidth = "80%";
    modalImg.style.maxHeight = "80%";

    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    images.forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // 깜빡거리는 효과 추가
    const welcomeText = document.getElementById("welcome-text");
    setInterval(() => {
        if (welcomeText.style.visibility === "hidden") {
            welcomeText.style.visibility = "visible";
        } else {
            welcomeText.style.visibility = "hidden";
        }
    }, 1000); // 1000ms = 1초 간격으로 깜빡임
});