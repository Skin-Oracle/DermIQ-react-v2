import {WithAuthenticatorProps, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import FileUploader from '../components/FileUploader';
import DermLogo from '../assets/DermLogo.png';
import './HomePage.css';


function HomePage({ signOut, user }: WithAuthenticatorProps) {
  return (
    
    <div className='container'>
        <img src={DermLogo} alt="Derm Logo" className="logo" />
        <FileUploader />
        <div className="buttonsContainer">
            <Button onClick={signOut}>Sign out</Button> 
        </div> 
    </div>
  )
}

export default HomePage




