# Computer Vision Implementation & Engineering Standards

This skill outlines the standards for developing, optimizing, and deploying production-grade computer vision (CV) systems.

## Object Detection & Segmentation
- **Model Selection**: Use **YOLOv8/v10** for real-time edge detection. Use **EfficientDet** for higher accuracy on server-side processing. Use **SAM (Segment Anything Model)** for high-fidelity zero-shot segmentation tasks.
- **Inference Optimization**: Export models to **ONNX** or **TensorRT** formats to achieve 2x-5x speedups on NVIDIA hardware. Use FP16 or INT8 quantization for edge deployments.
- **Evaluation Metrics**: Track **mAP@50-95** (mean Average Precision) for detection and **mIoU** (Intersection over Union) for segmentation.

## Image Processing & Quality
- **Preprocessing Pipeline**: consistent resizing, normalization (subtracting mean, dividing by std), and color space conversion (BGR to RGB) is mandatory to match training distributions.
- **Augmentation Standards**: Use **Albumentations** for robust spatial and pixel-level augmentations during training to prevent overfitting.
- **Quality Assessment**: 
    - **Sharpness**: Laplacian variance `cv2.Laplacian(gray, cv2.CV_64F).var()`. Values < 100 typically indicate blur.
    - **Brightness**: Mean pixel intensity. Detect underexposed (<50) or overexposed (>200) frames.
    - **Compression**: Detect artifacts in highly compressed JPEGs to avoid degradation in model performance.

## Face Analysis & Biometrics
- **Detection & Alignment**: Use **MTCNN** or **MediaPipe** for robust landmark detection. Aligning faces (warping to a standard pose) is critical before recognition.
- **Recognition Patterns**: Use **FaceNet** or **ArcFace** for generating high-dimensional embeddings. Use Cosine Similarity for identity matching.

## Optical Character Recognition (OCR)
- **Pipeline Strategy**: detect text regions first using **CRAFT** or **PaddleOCR** before passing crops to the recognition engine.
- **Post-Processing**: Use Beam Search and language model correction (e.g., symspell) to improve recognition accuracy in noisy images.

## Deployment & Monitoring
- **Real-Time FPS**: Target at least 30 FPS for live video streams. Implement frame skipping or multi-threaded decoding if the CPU is a bottleneck.
- **Model Drift**: monitor for changes in input distributions (e.g., changes in camera angle, lighting, or background noise) which lead to performance degradation.
