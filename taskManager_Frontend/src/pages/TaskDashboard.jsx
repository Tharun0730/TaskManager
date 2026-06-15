import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Container,
  Snackbar,
  Stack,
  Chip,
  Pagination,
  Paper,
} from "@mui/material";

import TaskHeader from "../components/TaskHeader";
import TaskForm from "../components/TaskForm";
import WorkloadCard from "../components/WorkloadCard";
import EmptyTask from "../components/EmptyTask";
import TaskSkeleton from "../components/TaskSkeleton";

import { createTask, getTasks } from "../features/tasks/taskService";

function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const newTask = await createTask(title);
      setTasks((prev) => [newTask, ...prev]);
      setTitle("");
      setPage(1);
      setSnackbar(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const pageCount = Math.ceil(tasks.length / itemsPerPage);
  const displayedTasks = tasks.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f8fafc",
        color: "#0f172a",
        py: { xs: 4, md: 8 },
        display: "flex",
        alignItems: "center",
        fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',
      }}
    >
      <Container maxWidth="sm">
        <TaskHeader />

        <TaskForm title={title} setTitle={setTitle} onSubmit={handleSubmit} />

        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, sm: 4 },
            borderRadius: 2,
            border: "1px solid #e2e8f0",
            bgcolor: "#ffffff",
            boxShadow: "0 10px 30px -10px rgba(15, 23, 42, 0.04)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Box
              sx={{
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontWeight: 700,
                fontSize: "0.8125rem",
                color: "#475569",
              }}
            >
              Active Tasks
            </Box>
            <Chip
              label={`${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`}
              size="small"
              sx={{
                fontWeight: 600,
                bgcolor: "#f1f5f9",
                color: "#475569",
                borderRadius: 1.5,
              }}
            />
          </Box>

          <Box>
            {loading ? (
              <TaskSkeleton />
            ) : tasks.length === 0 ? (
              <EmptyTask />
            ) : (
              <Stack spacing={2}>
                {displayedTasks.map((task, index) => (
                  <WorkloadCard
                    key={task.id || index}
                    task={task}
                    index={index}
                  />
                ))}

                {pageCount > 1 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 2,
                      pt: 2,
                      borderTop: "1px solid #f1f5f9",
                    }}
                  >
                    <Pagination
                      count={pageCount}
                      page={page}
                      onChange={handlePageChange}
                      shape="rounded"
                      size="small"
                      sx={{
                        "& .MuiPaginationItem-root": {
                          fontWeight: 600,
                          "&.Mui-selected": {
                            bgcolor: "#2563eb",
                            color: "#fff",
                            "&:hover": { bgcolor: "#1d4ed8" },
                          },
                        },
                      }}
                    />
                  </Box>
                )}
              </Stack>
            )}
          </Box>
        </Paper>
      </Container>

      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => setSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: "100%", borderRadius: 2.5, fontWeight: 600 }}
        >
          Task registered successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default TaskDashboard;
