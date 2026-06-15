import { Box, Typography } from "@mui/material";

function TaskHeader() {
  return (
    <Box sx={{ mb: 4, textAlign: "center" }}>
      <Typography variant="h4" fontWeight={800} color="primary" sx={{ fontWeight:"bolder", letterSpacing: "-0.5px", mb: 0.5 }}>
        Task Workspace
      </Typography>
      <Typography variant="body2" color="text.secondary">
        A clean, streamlined ledger of your active project priorities.
      </Typography>
    </Box>
  );
}

export default TaskHeader;