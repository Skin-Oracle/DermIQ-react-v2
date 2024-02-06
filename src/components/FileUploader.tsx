import React from 'react';
import { Button, View } from '@aws-amplify/ui-react';
import { uploadData } from 'aws-amplify/storage';


function FileUploader() {
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    const filename = file.name;

    //do not change -> public access right now 
    try {
      const result = await uploadData({
        key: filename,
        data: file,
      }).result;
      console.log('Succeeded: ', result);
    } catch (error) {
      console.log('Error : ', error);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('fileInput')?.click();
  };

  return (
    <View>
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <Button onClick={triggerFileInput}>Upload Image</Button>
    </View>
  );
}

export default FileUploader;
