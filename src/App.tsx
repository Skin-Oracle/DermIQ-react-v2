import { withAuthenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import HomePage from './pages/HomePage';
import { UsersProvider } from './contexts/UsersProvider';
import { EntriesProvider } from './contexts/EntriesProvider';
import { MedicationsProvider } from './contexts/MedicationsProvider';
import { ReportsProvider } from './contexts/ReportsProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReportPage from './pages/ReportPage';
export function App({ signOut, user }: WithAuthenticatorProps) {

  
  
  return (
    <>
      <Router>
        <UsersProvider>
          <EntriesProvider>
            <MedicationsProvider>
              <ReportsProvider>
              <Routes>
                <Route path="/" element={<HomePage signOut={signOut} user={user} />} />
                <Route path="/reports/:entryId" element={<ReportPage />} />
              </Routes>
              </ReportsProvider>
            </MedicationsProvider>
          </EntriesProvider>
        </UsersProvider>
      </Router>
    </>
  );
}

export default withAuthenticator(App);



