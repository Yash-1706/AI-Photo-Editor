console.log("Hello")

const imageInput = document.getElementById('imageInput')
const imagePreview = document.getElementById('imagePreview')


imageInput.addEventListener('change', function(event){
    const file = event.target.files[0];

    if(file){
        const reader = new FileReader();

        reader.onload = function(e){
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        }

        reader.readAsDataURL(file)
    }
    else{
        imagePreview.style.display = 'none';
    }


})