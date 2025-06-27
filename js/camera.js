document.addEventListener('DOMContentLoaded', () => {
    const cameraFeed = document.getElementById('cameraFeed');
    const captureButton = document.getElementById('captureButton');
    const photoCanvas = document.getElementById('photoCanvas');
    const capturedPhoto = document.getElementById('capturedPhoto');
    const context = photoCanvas.getContext('2d');

    // Access the camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }) // 'environment' for rear camera, 'user' for front
            .then(stream => {
                cameraFeed.srcObject = stream;
            })
            .catch(error => {
                console.error('Error accessing camera:', error);
                alert('Không thể truy cập camera. Vui lòng kiểm tra quyền truy cập camera của trình duyệt.');
            });
    } else {
        alert('Trình duyệt của bạn không hỗ trợ truy cập camera.');
    }

    // Capture photo
    captureButton.addEventListener('click', () => {
        photoCanvas.width = cameraFeed.videoWidth;
        photoCanvas.height = cameraFeed.videoHeight;
        context.drawImage(cameraFeed, 0, 0, photoCanvas.width, photoCanvas.height);
        const dataUrl = photoCanvas.toDataURL('image/png');

        capturedPhoto.src = dataUrl;
        capturedPhoto.style.display = 'block';
        cameraFeed.style.display = 'none';
        captureButton.style.display = 'none';

        // Redirect to travel.html after a short delay to show the captured image (optional)
        setTimeout(() => {
            window.location.href = 'travel.html';
        }, 500); // Adjust delay as needed
    });
});