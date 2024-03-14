import React, { useState, useContext, createContext, useMemo, useCallback } from 'react';
import * as APITypes from "../API";
import { generateClient } from "aws-amplify/api";
const client = generateClient();

import { getUser } from '../graphql/queries';
import { createUser } from '../graphql/mutations';

interface UsersContextType {
  isUserLoading: boolean;
  users: APITypes.User | undefined;
  fetchOrCreateUser: (userID: string) => Promise<void>;
}

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export const UsersProvider = (props: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<APITypes.User | undefined>();
    const [isUserLoading, setIsUserLoading] = useState<boolean>(true);

    const fetchOrCreateUser = useCallback(async (userID: string) => {
        setIsUserLoading(true); // Set loading state to true before fetching data
      
        try {
          // Call the query with the required variables
          const response = (await client.graphql({
            query: getUser,
            variables: { id: userID },
          }));
      
          if (response.data?.getUser) {
            setUsers(response.data.getUser); // This will set the user state, `setUsers` must match the name of your user state setter function
          }  else {
            // Handle null response data if necessary
            const newUser = await createNewUser({id:userID})
            console.log(newUser)
            if (newUser) {
                setUsers(newUser);
            } else {
                setUsers(undefined);
            }
          }
        } catch (error) {
          console.error('Error fetching user:', error);
        } finally {
          setIsUserLoading(false); // Set loading state to false after fetching data
        }
      },[]);

      const createNewUser = async (input: APITypes.CreateUserInput) => {
        try {
          const response = await client.graphql({
            query: createUser,
            variables: {
              input: input,
            },
          });
      
          // Check if the mutation was successful
          if (response.data?.createUser) {

            return response.data.createUser; // Return the newly created user object

          } else {
            console.error('Failed to create user:', response.errors);
            return null;
          }
        } catch (error) {
          console.error('Error creating user:', error);
          throw error; // Rethrow the error to be handled by the caller, if necessary
        }
      };

  const value = useMemo(
    () => ({
        isUserLoading,
        users,
        fetchOrCreateUser,
    }),
    [
        isUserLoading,
        users,
        fetchOrCreateUser,
    ],
  );

  return <UsersContext.Provider value={value}>{props.children}</UsersContext.Provider>;
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("Teams context should be used within TeamsProvider");
  }

  return context;
};