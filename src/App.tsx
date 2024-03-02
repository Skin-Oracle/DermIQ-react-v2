import { withAuthenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import HomePage from './pages/HomePage';
// import UserUpdateForm from './ui-components/UserUpdateForm'

export function App({ signOut, user }: WithAuthenticatorProps) {
  
  return (
    <>
    <HomePage signOut={signOut} user={user} />
    </>
  );
}

export default withAuthenticator(App);



