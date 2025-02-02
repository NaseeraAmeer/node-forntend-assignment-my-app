import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
  Button,
  Link,
} from "@mui/material";
 import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Dummy data for webpages
const dummyData = [
  {
    id: 1,
    url: "https://example.com/page1",
    status: "Scraped",
    chunks: [
      { id: 1, content: "This is the first chunk of data from page 1." },
      { id: 2, content: "This is the second chunk of data from page 1." },
    ],
  },
  {
    id: 2,
    url: "https://example.com/page2",
    status: "Pending",
    chunks: [],
  },
  {
    id: 3,
    url: "https://example.com/page3",
    status: "Detected",
    chunks: [],
  },
  {
    id: 4,
    url: "https://example.com/page4",
    status: "Scraped",
    chunks: [
      { id: 1, content: "This is the first chunk of data from page 4." },
    ],
  },
];

export default function WebpageTable() {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>URL</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((webpage) => (
            <React.Fragment key={webpage.id}>
              <TableRow
                onClick={() => handleRowClick(webpage.id)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell>{webpage.url}</TableCell>
                <TableCell align="right">
                  {webpage.status === "Pending" && (
                    <CircularProgress size={20} />
                  )}
                  {webpage.status}
                </TableCell>
              </TableRow>
              {expandedRow === webpage.id && (
                <TableRow>
                  <TableCell colSpan={2}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Scraped Data Chunks</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {webpage.chunks.length > 0 ? (
                          webpage.chunks.map((chunk) => (
                            <Paper
                              key={chunk.id}
                              sx={{ padding: 2, marginBottom: 1 }}
                            >
                              <Typography>{chunk.content}</Typography>
                            </Paper>
                          ))
                        ) : (
                          <Typography>No data scraped yet.</Typography>
                        )}
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      <Button > 
        <Link href ="Chatbot" >Submit </Link>
        </Button>
    </TableContainer>
    
  );
}
