import { withAuthenticator, WithAuthenticatorProps, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import HomePage from './pages/HomePage';


export function App({ signOut, user }: WithAuthenticatorProps) {
  
  return (
    <HomePage signOut={signOut} user={user} />
  );
}

export default withAuthenticator(App);



