document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const uploadInput = document.createElement("input");
    uploadInput.type = "file";
    uploadInput.accept = "image/*";
    uploadInput.multiple = true;
    
    const uploadButton = document.createElement("button");
    uploadButton.textContent = "Upload Images";
    document.body.insertBefore(uploadButton, gallery);
    document.body.insertBefore(uploadInput, gallery);
    
    uploadButton.addEventListener("click", () => uploadInput.click());
    
    uploadInput.addEventListener("change", (e) => {
        const files = e.target.files;
        for (let file of files) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imgLink = document.createElement("a");
                imgLink.href = event.target.result;
                imgLink.setAttribute("data-lightbox", "gallery");
                
                const img = document.createElement("img");
                img.src = event.target.result;
                
                imgLink.appendChild(img);
                gallery.appendChild(imgLink);
            };
            reader.readAsDataURL(file);
        }
    });
});
