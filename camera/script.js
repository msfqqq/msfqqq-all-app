const cameraStream = document.getElementById("camera-stream");
const captureButton = document.getElementById("capture-button");
const snapshotCanvas = document.getElementById("snapshot-canvas");
const snapshotImage = document.getElementById("snapshot-image");

// Access the user's camera
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        cameraStream.srcObject = stream;
    } catch (error) {
        console.error("Error accessing camera:", error);
    }
}

// Capture a snapshot
function captureSnapshot() {
    snapshotCanvas.width = cameraStream.videoWidth;
    snapshotCanvas.height = cameraStream.videoHeight;
    snapshotCanvas.getContext("2d").drawImage(cameraStream, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
    snapshotImage.src = snapshotCanvas.toDataURL("image/png");
    snapshotImage.style.display = "block";
}

// Event listener for the capture button
captureButton.addEventListener("click", captureSnapshot);

// Start the camera when the page loads
startCamera();
