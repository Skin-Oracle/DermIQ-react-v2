import { withAuthenticator, WithAuthenticatorProps, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import FileUploader from './components/FileUploader';
import DermLogo from './components/DermLogo.png';
import './App.css';


export function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <div className="container">
      <img src={DermLogo} alt="Derm Logo" className="logo" />

      <div className="buttonsContainer">
        <FileUploader />
        <Button onClick={signOut}>Sign out</Button>  
      </div>
    </div>
  );
}

export default withAuthenticator(App);



