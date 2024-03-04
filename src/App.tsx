import { withAuthenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import HomePage from './pages/HomePage';
import { UsersProvider } from './contexts/UsersProvider';
import { EntriesProvider } from './contexts/EntriesProvider';
import { MedicationsProvider } from './contexts/MedicationsProvider';
import { ReportsProvider } from './contexts/ReportsProvider';
import ReportPage from './pages/ReportPage';

export function App({ signOut, user }: WithAuthenticatorProps) {

  
  return (
    <>
      <UsersProvider>
        <EntriesProvider>
          <MedicationsProvider>
            <ReportsProvider>
              <HomePage signOut={signOut} user={user} />
              <ReportPage entryID = "123123" entryName = "123123"/>
            </ReportsProvider>
          </MedicationsProvider>
        </EntriesProvider>
      </UsersProvider>
    </>
  );
}

export default withAuthenticator(App);



