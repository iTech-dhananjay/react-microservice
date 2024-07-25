import React, { useState } from 'react';

const uploadDir = 'http://localhost:4009/video-image-stream/image/upload-chunk';
const CHUNK_SIZE = 1 * 1024 * 1024; // 1MB

const ImageUploader = () => {
    const [files, setFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState({});

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const uploadChunk = async (file, chunk, chunkIndex, totalChunks) => {
        const formData = new FormData();
        formData.append('chunk', chunk);
        formData.append('originalname', file.name);
        formData.append('chunkIndex', chunkIndex);
        formData.append('totalChunks', totalChunks);

        try {
            await fetch(uploadDir, {
                method: 'POST',
                body: formData,
            });
            setUploadProgress(prevProgress => ({
                ...prevProgress,
                [file.name]: {
                    totalChunks,
                    uploadedChunks: chunkIndex + 1,
                    progress: Math.round(((chunkIndex + 1) / totalChunks) * 100),
                }
            }));
        } catch (error) {
            console.error('Error uploading chunk:', error);
        }
    };

    const uploadFileInChunks = async (file) => {
        const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

        for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
            const start = chunkIndex * CHUNK_SIZE;
            const end = Math.min(start + CHUNK_SIZE, file.size);
            const chunk = file.slice(start, end);

            await uploadChunk(file, chunk, chunkIndex, totalChunks);
        }
    };

    const handleUpload = async () => {
        const uploadPromises = Array.from(files).map(file => uploadFileInChunks(file));
        await Promise.all(uploadPromises);
        alert('Upload complete');
    };

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Upload Images in Chunks</h2>
            <input type="file" multiple onChange={handleFileChange} style={inputStyle} />
            <button onClick={handleUpload} style={buttonStyle}>Upload</button>

            {Object.keys(uploadProgress).length > 0 && (
                <div style={progressContainerStyle}>
                    <h3>Upload Progress</h3>
                    {Object.keys(uploadProgress).map(fileName => (
                        <div key={fileName} style={progressItemStyle}>
                            <p style={fileNameStyle}>{fileName}</p>
                            <div style={progressBarContainerStyle}>
                                <div style={{
                                    ...progressBarStyle,
                                    width: `${uploadProgress[fileName].progress}%`
                                }}>
                                    {uploadProgress[fileName].progress}%
                                </div>
                            </div>
                            <p>{uploadProgress[fileName].uploadedChunks}/{uploadProgress[fileName].totalChunks} chunks uploaded</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
};

const headerStyle = {
    textAlign: 'center',
    color: '#333',
};

const inputStyle = {
    display: 'block',
    margin: '20px auto',
};

const buttonStyle = {
    display: 'block',
    margin: '20px auto',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
};

const progressContainerStyle = {
    marginTop: '20px',
};

const progressItemStyle = {
    marginBottom: '10px',
};

const fileNameStyle = {
    fontWeight: 'bold',
};

const progressBarContainerStyle = {
    height: '25px',
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    overflow: 'hidden',
    marginBottom: '5px',
};

const progressBarStyle = {
    height: '100%',
    backgroundColor: '#007BFF',
    textAlign: 'center',
    lineHeight: '25px',
    color: '#fff',
};

export default ImageUploader;
