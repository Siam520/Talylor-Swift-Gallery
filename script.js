let scrollContainer= document.querySelector(".gallery");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft +=900;
});

backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft -=900;
    });
    document.addEventListener("DOMContentLoaded", function () {
        // ... your existing code
    
        let modal = document.getElementById("myModal");
        let modalImage = document.getElementById("modalImage");
        let closeBtn = document.getElementById("closeBtn");
        let galleryImages = document.querySelectorAll(".gallery-image");
    
        galleryImages.forEach((image) => {
            image.addEventListener("click", () => {
                modal.style.display = "block";
                modalImage.src = image.src;
            });
        });
    
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
     
