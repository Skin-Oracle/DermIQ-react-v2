import React, { useCallback, FC, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button, Typography } from "@mui/material";

// Define a TypeScript type for the component props
interface StyledDropzoneProps {
  handleImageUpload: (file: File) => void;
}

const StyledDropzone: FC<StyledDropzoneProps> = ({ handleImageUpload }) => {

  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // The acceptedFiles array contains all the dropped files.
    // Since we only want one, we can take the first one directly.
    if (acceptedFiles.length > 0) {
      handleImageUpload(acceptedFiles[0]);
    }
  }, [handleImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false, // Accept only one file
    accept: {'image/*': ['.png', '.gif', '.jpeg', '.jpg']} // Set accepted image types
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed #ccc',
        borderRadius: 1,
        p: 4,
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: isDragActive ? '#eee' : '#fafafa'
      }}
    >
      <input {...getInputProps()} />
      <Typography>
        {isDragActive ? 
          <p>Drop the photo here...</p> :
          <p>Drag and drop a photo here, or click to select a photo</p>
        }
      </Typography>
    </Box>
  );
};

interface Props {
  handleImageUpload: (file: File) => void;
}

const PhotoUploadComponent = ({handleImageUpload} : Props) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onFileUpload = (file: File) => {
    setSelectedFile(file);
    handleImageUpload(file);
  };

  const onFileRemove = () => {
    setSelectedFile(null);
    // If handleImageUpload changes behavior, invoke with null or empty value
    // handleImageUpload(null);
  };
  return (
    <div>
      {selectedFile ? (
        <Box 
        display={"flex"}
        flexDirection={"column"}
        sx={{
          border: '2px dashed #ccc',
          borderRadius: 1,
          p: 4,
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: '#eee',
        }}>
          <Typography variant="body1">{selectedFile.name}</Typography>
          <Box sx={{ width: 'auto' }}>
          <Button variant="outlined" onClick={onFileRemove}>
            Remove
          </Button>
        </Box>
        </Box>
      ) : (
        <StyledDropzone handleImageUpload={onFileUpload} />
      )}
    </div>
  );
};

export default PhotoUploadComponent;