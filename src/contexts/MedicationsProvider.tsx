import React, { useState, useContext, createContext, useCallback, useMemo } from 'react';
import * as APITypes from "../API";
import { generateClient } from "aws-amplify/api";
const client = generateClient();
import { listMedications } from '../graphql/queries';
import { deleteMedication, createMedication } from '../graphql/mutations';

// Define the type for our medications context state
interface MedicationsContextState {
  medications: APITypes.Medication[] | undefined;
  isMedicationsLoading: boolean;
  fetchMedications:(entryID: string) =>Promise<void>;
  createNewMedication:(input: APITypes.CreateMedicationInput) => Promise<void>;
  deleteExistingMedication:(input: APITypes.DeleteMedicationInput) => Promise<void>;
}

// Create the context
const MedicationsContext = createContext<MedicationsContextState | undefined>(undefined);


export const MedicationsProvider = (props: { children: React.ReactNode }) => {
  const [medications, setMedications] = useState<APITypes.Medication[]>([]);
  const [isMedicationsLoading, setIsMedicationsLoading] = useState<boolean>(true);

  const fetchMedications = useCallback(async (entryID: string) => {
    try {
      setIsMedicationsLoading(true);
      // Cast the response to the expected GraphQLResult type
      const response = (await client.graphql({
        query: listMedications,
        variables:{
          filter: {
            id: {
              eq: entryID // This line specifies the filter condition
            }
          }
        }
      }));

      if (response.data.listMedications.items){
        setMedications(response.data.listMedications.items)
      }
    } catch (e) {
      console.error("Failed to fetch Medications" + e);
    } finally {
      setIsMedicationsLoading(false);
    }
  },[]);
  const createNewMedication = useCallback(async(input:APITypes.CreateMedicationInput) => {
    try {
      const response = await client.graphql({
        query: createMedication,
        variables: {
          input: input,
        },
      });
  
      // Check if the mutation was successful
      if (response.data?.createMedication) {
        medications.push(response.data.createMedication)
      } else {
        console.error('Failed to create entry:', response.errors);
      }
    } catch (error) {
      console.error('Error creating entry:', error);
      throw error; // Rethrow the error to be handled by the caller, if necessary
    }
  },[medications]);

  const deleteExistingMedication = useCallback(async(input:APITypes.DeleteMedicationInput) => {
    try {
      const response = await client.graphql({
        query: deleteMedication,
        variables: {
          input: input,
        },
      });
  
      // Check if the mutation was successful
      if (response.data?.deleteMedication) {
        setMedications(prevMedications => prevMedications.filter(entry => entry.id !== response.data.deleteMedication.id));
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
      medications, isMedicationsLoading, fetchMedications, createNewMedication, deleteExistingMedication
    }),
    [
      medications, isMedicationsLoading, fetchMedications, createNewMedication, deleteExistingMedication
    ],
  );

  return <MedicationsContext.Provider value={value}>{props.children}</MedicationsContext.Provider>;
};

export const useMedications = () => {
  const context = useContext(MedicationsContext);
  if (!context) {
    throw new Error('useMedications must be used within an MedicationsProvider');
  }
  return context;
};