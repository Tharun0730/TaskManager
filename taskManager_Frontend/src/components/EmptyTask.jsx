import { Box, Typography } from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

function EmptyTask() {
  return (
    <Box
      textAlign="center"
      py={8}
      sx={{
        bgcolor: "#fff",
        p:4,
        borderRadius: 3,
        border: "1px dashed #cbd5e1",
      }}
    >
      <AssignmentTurnedInIcon sx={{ fontSize: 36, color: "#94a3b8", mb: 1.5 }} />
      <Typography variant="body2" fontWeight={600} color="text.primary">
        All caught up
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Add an assignment above to initialize your workflow.
      </Typography>
    </Box>
  );
}

export default EmptyTask;