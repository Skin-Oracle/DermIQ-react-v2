import {WithAuthenticatorProps } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import FileUploader from '../components/FileUploader';
// import DermLogo from '../assets/DermLogo.png';
import './HomePage.css';
import {Button, Container, Box, Typography} from '@mui/material'
import { DiagnosisTable } from '../components/DiagnosisTable';
import { useUsersContext } from '../contexts/UsersProvider';
import { useEffect } from 'react';


const HomePage = ({ signOut, user }: WithAuthenticatorProps) => {
  const {users, fetchOrCreateUser} = useUsersContext();

  useEffect(() => {
    if (user && user.userId) {
      (async () => {
        try {
          await fetchOrCreateUser(user.userId); // Assuming this is an async function
        } catch (error) {
          console.error('Error in fetchOrCreateUser:', error);
        }
      })();
    }
  }, [user, fetchOrCreateUser]);

  return (
    <>
    { users ? (
      <Container
        sx={{ width: "100%", py: "50px"}}
        maxWidth="xl"
        disableGutters
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            mb: "30px",
          }}
        >
          <Typography sx={{ fontSize: "1.5rem", color: "#404040", fontWeight: 600 }}>
            Diagnoses
          </Typography>

          <Button
          variant="contained"
          // onClick={() => {handleSignOut}}
          >
            Sign out
          </Button>
          <Button
            variant="contained"
            // onClick={() => navigate("/datasources/create")}
          >
            New Diagnosis
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            border: "1px solid #e9e8ed",
            borderRadius: 0,
          }}
        >
          <DiagnosisTable />
        </Box>
      </Container>
    ):
    (<Typography>Loading</Typography>)
    }
      </>
  )
}

export default HomePage




