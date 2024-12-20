import React, { useState } from 'react';

const uploadDir = 'http://localhost:4009/video-image-stream/image/upload-chunk';
const imageListUrl = 'http://localhost:4009/video-image-stream/image/image-list';
const CHUNK_SIZE = 1 * 1024 * 1024; // 1MB

const ImageUploader = () => {
    const [files, setFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState({});
    const [imageList, setImageList] = useState([]);

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

    const fetchImageList = async () => {
        try {
            const response = await fetch(imageListUrl);
            const data = await response.json();
            setImageList(data.images);
        } catch (error) {
            console.error('Error fetching image list:', error);
        }
    };

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Upload Images in Chunks</h2>
            <input type="file" multiple onChange={handleFileChange} style={inputStyle} />
            <button onClick={handleUpload} style={buttonStyle}>Upload</button>
            <button onClick={fetchImageList} style={buttonStyle}>Show Image List</button>

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

            {imageList.length > 0 && (
                <div style={boxStyle}>
                    <h3 style={tableHeaderStyle}>Image List</h3>
                    <table style={tableStyle}>
                        <thead style={{border: '1px solid #ddd'}}>
                        <tr style={{ border: '2px solid #ddd' }}>
                            <th>#</th>
                            <th>Filename</th>
                            <th>File Path</th>
                            <th>File Size</th>
                            <th>MIME Type</th>
                            <th>Created At</th>
                        </tr>
                        </thead>
                        <tbody>
                        {imageList.map((image, index) => (
                            <tr style={{ border: '2px solid #ddd' }} key={image._id}>
                                <td style={{ border: '2px solid #ddd', paddingLeft:"5px" }}>{index + 1}</td>
                                <td style={{ border: '2px solid #ddd' }}> {image.filename}</td>
                                <td style={{ border: '2px solid #ddd' }}>{image.filePath}</td>
                                <td style={{ border: '2px solid #ddd' }}>{image.fileSize}</td>
                                <td style={{ border: '2px solid #ddd' }}>{image.mimeType}</td>
                                <td>{new Date(image.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
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
    fontWeight:'bold'
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

const boxStyle = {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
};

const tableHeaderStyle = {
    marginBottom: '10px',
    textAlign: 'center',
};

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
};

const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
};

export default ImageUploader;