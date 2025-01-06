console.log("Hello")
// document.body.style.overflow = 'hidden';  // Disable scrolling  //if auto is used then it will be enabled

//Upload and Display Image

const imageInput = document.getElementById('imageInput')
const imagePreview = document.getElementById('imagePreview')


imageInput.addEventListener('change', function(event){
    const file = event.target.files[0];

    if(file){
        const reader = new FileReader();

        reader.onload = function(e){
            uploadedImage.onload = function(){
                console.log('Image loaded')
                console.log('Image dimensions:', uploadedImage.naturalWidth, uploadedImage.naturalHeight)
            }
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
        }

        reader.readAsDataURL(file)
    }
    else{
        imagePreview.style.display = 'none';
    }

})


    // Get the HTML element with the id 'imagePreview' and assign it to the variable 'uploadedImage'
    const uploadedImage = document.getElementById('imagePreview')

    //Brightness Slider

    const brightnessSlider = document.getElementById('brightness-slider')
    const brightnessValue = document.getElementById('brightness-value')

    let brightness = 100;

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

    function updateImageFilter(){
        imageForSaturation.style.filter = `brightness(${brightness}%) saturate(${saturation}%)`
    }

    const brightnessControl = document.getElementById('brightness-slider')
    if(brightnessControl){
        brightnessControl.addEventListener('input', function(event){
            brightness = event.target.value;
            updateImageFilter()
        })
    }

    saturationSlider.addEventListener('input', function(event) {
        saturation = event.target.value;
        saturationValue.textContent = `${saturation}%`;
        updateImageFilter()
    });

    //Contrast Slider

    const contrastSlider = document.getElementById('contrast-slider')
    const contrastValue = document.getElementById('contrast-value')
    const imageForContrast = document.getElementById('imagePreview')

    let contrast = 100
    
    function updateImageFilter() {
        uploadedImage.style.filter = `brightness(${brightness}%) saturate(${saturation}%) contrast(${contrast}%)`;
    }

    contrastSlider.addEventListener('input', function(event){
        contrast = event.target.value
        contrastValue.textContent = `${contrast}%`
        updateImageFilter()
    })

    //Remove Background button

    const removeBgBtn = document.getElementById('remove-bg-btn')

    removeBgBtn.addEventListener('click', function(){
        const file = imageInput.files[0]

        const apiKey = 'SH8v1n9GFPLpMQ6HQx2gZpfq';        // CHANGE: Replace with your remove.bg API key
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

    //Grayscale Button
    const grayscaleBtn = document.getElementById('grayscale-btn')

    grayscaleBtn.addEventListener('click', function(){
        uploadedImage.style.filter = 'grayscale(100%)'
    })

    //Sepia Button
    const sepiaBtn = document.getElementById('sepia-btn')

    sepiaBtn.addEventListener('click', function(){
        uploadedImage.style.filter = 'sepia(100%)'
    })

    //Blur Button
    const blurBtn = document.getElementById('blur-btn')

    blurBtn.addEventListener('click', function(){
        uploadedImage.style.filter = 'blur(5px)'
    })

    //Invert Button
    const invertBtn = document.getElementById('invert-btn')

    invertBtn.addEventListener('click', function(){
        uploadedImage.style.filter = 'invert(100%)'
    })

    //Opacity Button
    const opacityBtn = document.getElementById('opacity-btn')

    opacityBtn.addEventListener('click', function(){
        uploadedImage.style.filter = 'opacity(50%)'
    })

    //Reset Button
    const resetBtn = document.getElementById('reset-btn')

    resetBtn.addEventListener('click', function(){
        uploadedImage.style.filter = 'none'

        // Reset slider's after clicking reset button
        //Brightness
        brightness = 100
        brightnessSlider.value = 100
        uploadedImage.style.filter = `brightness(${brightness}%)`
        brightnessValue.textContent = '100%'

        //Saturation
        saturation = 100
        saturationSlider.value = 100
        updateImageFilter()
        saturationValue.textContent = '100%'

        //Contrast
        contrast = 100
        contrastSlider.value = 100
        updateImageFilter()
        contrastValue.textContent = '100%'
    })


    //Save Button
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')

    function drawImageToCanvasWithFilters(){

        if(!uploadedImage.src || uploadedImage.naturalWidth === 0 || uploadedImage.naturalHeight === 0){
            console.error("Image is not loaded or has invalid dimensions")
            alert("Upload a valid image")
            return
        }

            console.log("Drawing image to canvas ...")
            canvas.width = uploadedImage.naturalWidth
            canvas.height = uploadedImage.naturalHeight

            const filters = `brightness(${brightness}%) saturate(${saturation}%) contrast(${contrast}%)`
            context.filter = filters

            context.clearRect(0, 0, canvas.width, canvas.height)
            context.drawImage(uploadedImage, 0, 0, canvas.width, canvas.height)
        
            console.log("Image drawn successfully")

            saveImage()
    }

    function saveImage(){
        const tempCanvas = document.createElement('canvas')
        const tempContext = tempCanvas.getContext('2d')

        tempCanvas.width = uploadedImage.naturalWidth
        tempCanvas.height = uploadedImage.naturalHeight 

        let filters = `brightness(${brightness}%) saturate(${saturation}%) contrast(${contrast}%)`

        if(uploadedImage.style.filter.includes('grayscale')){
            filters += 'grayscale(100%)'
        }
        
        if (uploadedImage.style.filter.includes('sepia')) {
            filters += ' sepia(100%)';
        }

        if (uploadedImage.style.filter.includes('blur')) {
            filters += ' blur(5px)';
        }

        if (uploadedImage.style.filter.includes('invert')) {
            filters += 'invert(100%)'
        }

        if (uploadedImage.style.filter.includes('opacity')) {
            filters += 'opacity(50%)'
        }

        tempContext.filter = filters

        tempContext.drawImage(uploadedImage, 0, 0, tempCanvas.width, tempCanvas.height)

        //Adding delay before saving the image
        setTimeout(() =>{
            const link = document.createElement('a')
            link.download = 'edited-image.png'
            link.href = tempCanvas.toDataURL('image/png')
            link.click()
        }, 100)

    }

    document.getElementById('save-btn').addEventListener('click', function(){
        drawImageToCanvasWithFilters()
    })
    

    //Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.dataset.theme = savedTheme;
    updateIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const newTheme = html.dataset.theme === 'dark' ? 'light' : 'dark';
        html.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });
    
    function updateIcon(theme) {
        icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }

