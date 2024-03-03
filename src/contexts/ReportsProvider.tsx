import React, { useState, useContext, createContext, useCallback, useMemo } from 'react';
import * as APITypes from "../API";
import { generateClient } from "aws-amplify/api";
const client = generateClient();
import { listReports } from '../graphql/queries';
import { deleteReport, createReport } from '../graphql/mutations';

// Define the type for our reports context state
interface ReportsContextState {
  reports: APITypes.Report[] | undefined;
  isReportsLoading: boolean;
  fetchReports:(entryID: string) =>Promise<void>;
  createNewReport:(input: APITypes.CreateReportInput) => Promise<void>;
  deleteExistingReport:(input: APITypes.DeleteReportInput) => Promise<void>;
}

// Create the context
const ReportsContext = createContext<ReportsContextState | undefined>(undefined);


export const ReportsProvider = (props: { children: React.ReactNode }) => {
  const [reports, setReports] = useState<APITypes.Report[]>([]);
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
        setReports(response.data.listReports.items)
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
      if (response.data?.createReport) {
        reports.push(response.data.createReport)
      } else {
        console.error('Failed to create entry:', response.errors);
      }
    } catch (error) {
      console.error('Error creating entry:', error);
      throw error; // Rethrow the error to be handled by the caller, if necessary
    }
  },[reports]);

  const deleteExistingReport = useCallback(async(input:APITypes.DeleteReportInput) => {
    try {
      const response = await client.graphql({
        query: deleteReport,
        variables: {
          input: input,
        },
      });
  
      // Check if the mutation was successful
      if (response.data?.deleteReport) {
        setReports(prevReports => prevReports.filter(entry => entry.id !== response.data.deleteReport.id));
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