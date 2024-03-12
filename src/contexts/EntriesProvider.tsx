import React, { useState, useContext, createContext, useCallback, useMemo } from 'react';
import * as APITypes from "../API";
import { generateClient } from "aws-amplify/api";
const client = generateClient();
import { useUsersContext } from './UsersProvider';
import { listEntries } from '../graphql/queries';
import { deleteEntry, createEntry } from '../graphql/mutations';

// Define the type for our entries context state
interface EntriesContextState {
  entries: APITypes.Entry[];
  isEntriesLoading: boolean;
  fetchEntries:(userID: string) =>Promise<void>;
  createNewEntry:(input: APITypes.CreateEntryInput) => Promise<void>;
  deleteExistingEntry:(input: APITypes.DeleteEntryInput) => Promise<void>;
}

// Create the context
const EntriesContext = createContext<EntriesContextState | undefined>(undefined);


export const EntriesProvider = (props: { children: React.ReactNode }) => {
  const {users} = useUsersContext();
  const [entries, setEntries] = useState<APITypes.Entry[]>([]);
  const [isEntriesLoading, setIsEntriesLoading] = useState<boolean>(true);

  const fetchEntries = useCallback(async (userID:string) => {
    try {
      setIsEntriesLoading(true);
      // Cast the response to the expected GraphQLResult type
      const response = (await client.graphql({
        query: listEntries,
        variables:{
          filter: {
            user_id: {
              eq: userID // This line specifies the filter condition
            }
          }
        }
      }));
      console.log(fetchEntries)
      if (response.data.listEntries.items){
        setEntries(response.data.listEntries.items)
      }
    } catch (e) {
      console.error("Failed to fetch entries" + e);
    } finally {
      setIsEntriesLoading(false);
    }
  },[]);
  const createNewEntry = useCallback(async(input:APITypes.CreateEntryInput) => {
    try {
      const response = await client.graphql({
        query: createEntry,
        variables: {
          input: input,
        },
      });
  
      // Check if the mutation was successful
      if (response.data?.createEntry) {
        entries.push(response.data.createEntry)
      } else {
        console.error('Failed to create entry:', response.errors);
      }
    } catch (error) {
      console.error('Error creating entry:', error);
      throw error; // Rethrow the error to be handled by the caller, if necessary
    }
  },[entries]);

  const deleteExistingEntry = useCallback(async(input:APITypes.DeleteEntryInput) => {
    try {
      const response = await client.graphql({
        query: deleteEntry,
        variables: {
          input: input,
        },
      });
  
      // Check if the mutation was successful
      if (response.data?.deleteEntry) {
        setEntries(prevEntries => prevEntries.filter(entry => entry.id !== response.data.deleteEntry.id));
      } else {
        console.error('Failed to delete entry:', response.errors);
      }
    } catch (error) {
      console.error('Error deleting entry:', error);
      throw error; // Rethrow the error to be handled by the caller, if necessary
    }
  },[]);

  const value = useMemo(
    () => ({
      entries, isEntriesLoading, fetchEntries, createNewEntry, deleteExistingEntry
    }),
    [
      entries, isEntriesLoading, fetchEntries, createNewEntry, deleteExistingEntry
    ],
  );

  return <EntriesContext.Provider value={value}>{props.children}</EntriesContext.Provider>;
};

export const useEntries = () => {
  const context = useContext(EntriesContext);
  if (!context) {
    throw new Error('useEntries must be used within an EntriesProvider');
  }
  return context;
};