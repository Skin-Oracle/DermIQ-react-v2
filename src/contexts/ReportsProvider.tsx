import React, { useState, useContext, createContext, useCallback, useMemo } from 'react';
import * as APITypes from "../API";
import { generateClient } from "aws-amplify/api";
const client = generateClient();
import { listReports } from '../graphql/queries';
import { deleteReport, createReport } from '../graphql/mutations';

interface ReportType{
    [entryID: string]: APITypes.Report[]
}
// Define the type for our reports context state
interface ReportsContextState {
  reports: ReportType | undefined;
  isReportsLoading: boolean;
  fetchReports:(entryID: string) =>Promise<void>;
  createNewReport:(input: APITypes.CreateReportInput) => Promise<void>;
  deleteExistingReport:(entryId: string, input: APITypes.DeleteReportInput) => Promise<void>;
}

// Create the context
const ReportsContext = createContext<ReportsContextState | undefined>(undefined);


export const ReportsProvider = (props: { children: React.ReactNode }) => {
  const [reports, setReports] = useState<ReportType>({});
  const [isReportsLoading, setIsReportsLoading] = useState<boolean>(true);

  const fetchReports = useCallback(async (entryID: string) => {
    try {
      setIsReportsLoading(true);
      // Cast the response to the expected GraphQLResult type
      const response = (await client.graphql({
        query: listReports,
        variables:{
          filter: {
            id: {
              eq: entryID // This line specifies the filter condition
            }
          }
        }
      }));

      if (response.data.listReports.items){
        setReports((prevReports) => ({
            ...prevReports, // Copy all existing report key-value pairs
            [entryID]: response.data.listReports.items, // Add new or update existing key with the new reports array
        }));
      }
    } catch (e) {
      console.error("Failed to fetch Reports" + e);
    } finally {
      setIsReportsLoading(false);
    }
  },[]);
  const createNewReport = useCallback(async(input:APITypes.CreateReportInput) => {
    try {
      const response = await client.graphql({
        query: createReport,
        variables: {
          input: input,
        },
      });
  
      // Check if the mutation was successful
      if (response.data?.createReport && input.entry_id) {
        const newReport = response.data.createReport;
        const entryId = input.entry_id;

        setReports((prevReports) => {
            const updatedReports = prevReports[entryId]
                ? [...prevReports[entryId], newReport]
                : [newReport];
            
            return {
                ...prevReports,
                [entryId]: updatedReports,
            };
        });
    }
    } catch (error) {
      console.error('Error creating entry:', error);
      throw error; // Rethrow the error to be handled by the caller, if necessary
    }
  },[]);

  const deleteExistingReport = useCallback(async(entryId: string, input:APITypes.DeleteReportInput) => {
    try {
      const response = await client.graphql({
        query: deleteReport,
        variables: {
          input: input,
        },
      });
  
      // Check if the mutation was successful
      if (response.data?.deleteReport) {
        setReports(prevReports => {
        // Make a shallow copy of the previous reports
        const updatedReports = {...prevReports};

        // Filter out the report that matches input.id
        const filteredReports = updatedReports[entryId].filter(report => report.id !== input.id);

        // Update the entryId key with the filtered array, or delete it if empty
        if (filteredReports.length > 0) {
          updatedReports[entryId] = filteredReports;
        } else {
          // If array is empty after removal, delete the key from the dictionary
          delete updatedReports[entryId];
        }

        return updatedReports;
      })} else {
        console.error('Failed to delete entry:', response.errors);
      }
    } catch (error) {
      console.error('Error deleting entry:', error);
      throw error; // Rethrow the error to be handled by the caller, if necessary
    }
  },[]);

  const value = useMemo(
    () => ({
      reports, isReportsLoading, fetchReports, createNewReport, deleteExistingReport
    }),
    [
      reports, isReportsLoading, fetchReports, createNewReport, deleteExistingReport
    ],
  );

  return <ReportsContext.Provider value={value}>{props.children}</ReportsContext.Provider>;
};

export const useReports = () => {
  const context = useContext(ReportsContext);
  if (!context) {
    throw new Error('useReports must be used within an ReportsProvider');
  }
  return context;
};