import React, { useState } from 'react';

export default function UploadDoc() {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log('File selected:', file);
  }

  async function handleReportSubmit(event) {
    event.preventDefault();

    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('pdfFile', selectedFile);
    console.log(formData);
    try {
      const response = await fetch('http://localhost:3000/upload-pdf', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('File uploaded successfully');
        alert('File uploaded successfully!');
      } else {
        console.error('Failed to upload file');
        alert('Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    }
  }

  return (
    <div className="p-4">
      <form onSubmit={handleReportSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
