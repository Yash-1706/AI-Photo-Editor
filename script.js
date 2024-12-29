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

    //Remove Background button

    const removeBgBtn = document.getElementById('remove-bg-btn')

    removeBgBtn.addEventListener('click', function(){
        const file = imageInput.files[0]

        // if(!file){
        //     alert('Please upload an image first!');
        //     return;
        // }

        const apiKey = 'R3vWvr7CBqFFqHRtm1qQ2UNy';
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










// console.log("Hello");

// // Upload and Display Image
// const imageInput = document.getElementById('imageInput');
// const imagePreview = document.getElementById('imagePreview');

// imageInput.addEventListener('change', function (event) {
//     const file = event.target.files[0];

//     if (file) {
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             imagePreview.src = e.target.result;
//             imagePreview.style.display = 'block';
//         };

//         reader.readAsDataURL(file);
//     } else {
//         imagePreview.style.display = 'none';
//     }
// });

// // Brightness Slider
// const brightnessSlider = document.getElementById('brightness-slider');
// const brightnessValue = document.getElementById('brightness-value');
// brightnessSlider.addEventListener('input', function (event) {
//     const brightness = event.target.value;
//     imagePreview.style.filter = `brightness(${brightness}%)`;
//     brightnessValue.textContent = `${brightness}%`;
// });

// // Remove Background Button
// const removeBgBtn = document.getElementById('remove-bg-btn'); // CHANGED: Moved outside of the imageInput event listener
// removeBgBtn.addEventListener('click', function () {
//     const file = imageInput.files[0];

//     if (!file) {
//         alert('Please upload an image first!'); // CHANGED: Added a validation check
//         return;
//     }

//     const apiKey = 'YOUR_REMOVE_BG_API_KEY'; // CHANGED: Replace with your actual API key
//     const formData = new FormData();
//     formData.append('image_file', file);
//     formData.append('size', 'auto');

//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://api.remove.bg/v1.0/remove.bg', true);
//     xhr.setRequestHeader('X-Api-Key', apiKey);

//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             const blob = new Blob([xhr.response], { type: 'image/png' }); // CHANGED: Correct Blob handling for image preview
//             const resultURL = URL.createObjectURL(blob);

//             imagePreview.src = resultURL; // CHANGED: Updated image preview with the result
//         } else {
//             console.error('Error:', xhr.responseText); // CHANGED: Improved error logging
//             alert('Failed to remove background. Please try again.');
//         }
//     };

//     xhr.onerror = function () {
//         alert('Network error. Please try again.'); // CHANGED: Improved error handling for network issues
//     };

//     xhr.responseType = 'blob'; // CHANGED: Ensured the response is a Blob
//     xhr.send(formData); // CHANGED: Ensures the API request is sent with the image
// });
