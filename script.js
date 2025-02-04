const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const output = document.getElementById('output');

// Access the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;

        // Automatically capture an image after 3 seconds (or any delay)
        setTimeout(() => {
            captureImage();
        }, 3000); // 3 seconds delay
    })
    .catch((err) => {
        console.error("Error accessing the camera: ", err);
    });

// Function to capture the image
function captureImage() {
    // Ensure the video is ready
    if (video.videoWidth === 0 || video.videoHeight === 0) {
        console.error("Video not ready yet.");
        return;
    }

    // Set canvas dimensions to match the video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);


    // Convert the canvas image to a data URL (base64)
    const imageDataURL = canvas.toDataURL('image/png');

    // Display the captured image
    output.src = imageDataURL;
    output.style.display = 'block';

    // Save the image to localStorage
    localStorage.setItem('capturedImage', imageDataURL);
    console.log("Image captured and saved to localStorage.");
}


// Usage
const imageDataURL = canvas.toDataURL('image/png');
downloadImage(imageDataURL);