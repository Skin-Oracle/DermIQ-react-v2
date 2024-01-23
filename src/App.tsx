import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { uploadData } from 'aws-amplify/storage';

export function App({ signOut, user }: WithAuthenticatorProps) {
  // Function to handle file selection and upload
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    const filename = file.name;

    try {
      const result = await uploadData({
        key: filename,
        data: file
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
    <>
      <View>
        <Heading>Welcome to our app </Heading>
        <Button onClick={signOut}>Sign out</Button>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <Button onClick={triggerFileInput}>Upload Image</Button>
      </View>
    </>
  );
}

export default withAuthenticator(App);