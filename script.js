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

    //Brightness Slider

    const brightnessSlider = document.getElementById('brightness-slider')
    const brightnessValue = document.getElementById('brightness-value')
    const uploadedImage = document.getElementById('imagePreview')

    brightnessSlider.addEventListener('input', function(event){
        const brightness = event.target.value;
        uploadedImage.style.filter = `brightness(${brightness}%)`;
        brightnessValue.textContent = `${brightness}%`;
    })

    //Saturation Slider

    const saturationSlider =  document.getElementById('saturation-slider')
    const saturationValue = document.getElementById('saturation-value')
    const imageForSaturation = document.getElementById('imagePreview') 

    let saturation = 100;
    let brightness = 100;

    function updateImageFilters(){
        imageForSaturation.style.filter = `brightness(${brightness}%) saturate(${saturation}%)`
    }

    const brightnessControl = document.getElementById('brightness-slider')
    if(brightnessControl){
        brightnessControl.addEventListener('input', function(event){
            brightness = event.target.value;
            updateImageFilters()
        })
    }


    saturationSlider.addEventListener('input', function(event) {
        saturation = event.target.value;
        saturationValue.textContent = `${saturation}%`;
        updateImageFilters()
    });



    //Remove Background button

    const removeBgBtn = document.getElementById('remove-bg-btn')

    removeBgBtn.addEventListener('click', function(){
        const file = imageInput.files[0]

        if(!file){
            alert('Please upload an image first!');
            return;
        }

        const apiKey = 'YOUR_REMOVE_BG_API_KEY';        // CHANGED: Replace with your actual API key
        const formData = new FormData();
        formData.append('image_file', file);
        formData.append('size', 'auto');

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.remove.bg/v1.0/removebg', true);
        xhr.setRequestHeader('X-Api-Key', apiKey);

        xhr.onload = function(){
            if(xhr.status === 200){
                const blob = new Blob([xhr.response], {type: 'image/png' });
                const resultURL = URL.createObjectURL(blob);

                // Display the result image
                imagePreview.src = resultURL;
            }
            else{
                console.error('Error:', xhr.responseText);
                alert('Failed to remove background. Please try again.');
            }

        }

        xhr.onerror = function(){
            alert('Network error. Please try again.');
        }

        xhr.responseType = 'blob';
        xhr.send(formData);

    })
    
})

