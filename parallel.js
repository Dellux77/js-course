// main.js
const worker = new Worker('filterWorker.js');
const imgData = ctx.getImageData(0, 0, width, height);

// Split image into chunks (e.g., 4 strips)
const chunkHeight = height / 4;
// Send chunk to worker
worker.postMessage({ pixels: chunk1, width, height: chunkHeight });

worker.onmessage = function(e) {
    // Receive processed pixels and draw to canvas
    ctx.putImageData(e.data.pixels, 0, 0);
};

// filterWorker.js
self.onmessage = function(e) {
    const { pixels } = e.data;
    // Apply grayscale or blur loop
    for (let i = 0; i < pixels.length; i += 4) {
        const avg = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
        pixels[i] = avg; // R
        pixels[i+1] = avg; // G
        pixels[i+2] = avg; // B
    }
    self.postMessage({ pixels });
}

