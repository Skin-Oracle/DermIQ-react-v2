import React, { useEffect, useState } from 'react';
import { withAuthenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import HomePage from './pages/HomePage';
import { Interactions } from '@aws-amplify/interactions';

export function App({ signOut, user }: WithAuthenticatorProps) {
  const [botResponse, setBotResponse] = useState('');
  const userInput = "I want to reserve a hotel for tonight";

  useEffect(() => {
    async function sendInputToBot() {
      try {
        const response = await Interactions.send({
          botName: "dermiqbot",
          message: userInput
        });
        setBotResponse(response.message);
      } catch (error) {
        console.error("Error sending message to bot:", error);
      }
    }

    sendInputToBot();
  }, [userInput]);

  return (
    <>
      <HomePage signOut={signOut} user={user} />
      <div>
        <p>Bot Response: {botResponse}</p>
      </div>
    </>
  );
}

export default withAuthenticator(App);
