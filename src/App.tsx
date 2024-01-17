import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

export function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <>
    <View>
      <Heading>Hello {user?.username} </Heading>
      <Button onClick={signOut}>Sign out</Button>
    </View>
    </>

  );
}

export default withAuthenticator(App);