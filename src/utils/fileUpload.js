export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:4009/ecom/upload", {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("File upload failed");
    }

    const data = await response.json();
    return data.url; // Assuming the backend returns the S3 URL
};