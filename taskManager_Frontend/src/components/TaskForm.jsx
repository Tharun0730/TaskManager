import { Button, Paper, Stack, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function TaskForm({ title, setTitle, onSubmit }) {
  const isInputEmpty = !title.trim();

  return (
    <Paper elevation={0} sx={{ p: 2.5, borderRadius: 2, border: "1px solid #e2e8f0", bgcolor: "#fff", mb: 4 }}>
      <form onSubmit={onSubmit}>
        <Stack direction="row" spacing={1.5}>
          <TextField
            fullWidth
            size="small"
            placeholder="What needs to be accomplished next?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2.5,
                bgcolor: "#f8fafc",
                "& fieldset": { borderColor: "#e2e8f0" },
                "&:hover fieldset": { borderColor: "#cbd5e1" },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            disableElevation
            disabled={isInputEmpty} 
            startIcon={<AddIcon />}
            sx={{
              bgcolor: "#2563eb",
              px: 3,
              borderRadius: 2.5,
              fontWeight: 600,
              textTransform: "none",
              height: "40px",
              whiteSpace: "nowrap",
              "&:hover": { bgcolor: "#1d4ed8" },
              
              "&.Mui-disabled": {
                bgcolor: "#e2e8f0",
                color: "#94a3b8"
              }
            }}
          >
            Add Task
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

export default TaskForm;