import { Box, Button, Modal, ThemeProvider, Typography, createTheme } from "@mui/material"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Chart, registerables } from 'chart.js';
import { useReports } from "../../contexts/ReportsProvider";
Chart.register(...registerables);

interface Props{
    open: boolean;
    onClose: () => void;
    entryId: string;
}
export const GraphModal = (({ open, onClose, entryId }: Props) => {

    const { reports } = useReports();
    const chartContainerRef = useRef<HTMLCanvasElement>(null);
    const [chartInstance, setChartInstance] = useState<Chart | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    const renderChart = () => {
      if (chartContainerRef.current && reports && reports[entryId]) {
        const chartContext = chartContainerRef.current.getContext('2d');
        if (chartContext) {
          const chartData = {
            datasets: [
                {
                label: 'Area over time',
                data: reports[entryId].map(report => ({
                    x: new Date(report.createdAt), // Make sure to convert to Date objects if necessary
                    y: report.area,
                })),
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                },
            ],
    };
          
                  const options = {
                    responsive: true,
                    scales: {
                      x: {
                        type: 'time',
                        time: {
                          tooltipFormat: 'PPP',
                        },
                        title: {
                          display: true,
                          text: 'Date',
                        }
                      },
                      y: {
                        beginAtZero: true,
                        title: {
                          display: true,
                          text: 'Area (mm^2)',
                        }
                      }
                    }
                  };
            const newChartInstance = new Chart(chartContext, {
            type: 'line',
            data: chartData,
            options: options,
            });

          setChartInstance(newChartInstance);
        }
      }
    }; 
  
    useLayoutEffect(() => {
        if (open && chartInstance === null) {
          // Only attempt to create the chart if it doesn't already exist
          setIsLoading(true);
          renderChart();
        }
        // Cleanup is handled in the same effect now, to directly use the variable
        // in its current state.
        return () => {
          if (chartInstance) {
            chartInstance.destroy();
            // Don't set state here; we are not guaranteed another render.
          }
        };
      }, [open, reports, entryId]);
      
      useEffect(() => {
        if (chartInstance) {
          setIsLoading(false); // Set loading to false once the chart has been instantiated.
        }
      }, [chartInstance]);


    return(
            <Modal
                open={open}
                onClose={() => {
                    if (chartInstance) {
                      chartInstance.destroy();
                      setChartInstance(null);
                    }
                    setIsLoading(true);
                    onClose();
                  }}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        height:"100%",
                        maxWidth: "800px",
                        maxHeight: "800px",
                        backgroundColor: "white",
                        borderRadius: 0,
                        overflowY: "auto",
                    }}
                    >
                        <Box
                            sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px",
                            width: "100%",
                            height: "100%",
                            mt: "10px",
                            p: "30px",
                            maxHeight:"600px"
                            // overflowY: "auto",
                            }}
                        >
                            <Typography sx={{ mb: '20px', fontSize: '25px', fontWeight: '800' }}>
                                Graph
                            </Typography>
                            {isLoading ? (
                                <Typography>Loading</Typography>
                            ) :
                            (
                                <canvas ref={chartContainerRef}  width="300" height="300" style={{maxWidth:"300px", maxHeight:"300px", height:"100%", width:"100%"}} />
                            )}
                            

                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
                                <Button variant="outlined" onClick={onClose}>
                                    Close
                                </Button>
                            </Box>
                </Box>
                </Box>
            </Modal>
    )
});

