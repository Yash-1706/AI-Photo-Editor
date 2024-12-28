console.log("Hello")

//Upload and Display Image

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

    //Brightness slider

    const brightnessSlider = document.getElementById('brightness-slider')
    const brightnessValue = document.getElementById('brightness-value')
    const uploadedImage = document.getElementById('imagePreview')

    brightnessSlider.addEventListener('input', function(event){
        const brightness = event.target.value;
        uploadedImage.style.filter = `brightness(${brightness}%)`;
        brightnessValue.textContent = `${brightness}%`;
    })
    


})