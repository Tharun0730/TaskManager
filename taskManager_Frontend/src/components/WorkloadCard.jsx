import { Card, CardContent, Box, Chip, Typography, Divider, Stack } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function WorkloadCard({ task, index }) {
  const timestamp = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card
      key={task.id || index}
      elevation={0}
      sx={{
        borderRadius: 2,
        border: "1px solid #e2e8f0",
        background: "#ffffff",
        transition: "border-color 0.15s ease",
        "&:hover": {
          borderColor: "#cbd5e1",
        },
      }}
    >
      <CardContent sx={{ p: "20px !important" }}>
        
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
          <Chip
            label="Pending"
            size="small"
            sx={{
              borderRadius: "4px",
              height: 18,
              fontSize: "0.625rem",
              fontWeight: 700,
              bgcolor: "#fff7ed",
              color: "#ea580c",
              border: "1px solid #ffedd5",
              textTransform: "uppercase",
            }}
          />
        </Box>

        <Typography 
          variant="body1" 
          fontWeight={500} 
          color="#0f172a" 
          sx={{ 
            mb: 2, 
            lineHeight: 1.5,
            // These properties prevent continuous text overflow
            wordBreak: "break-word",
            overflowWrap: "anywhere"
          }}
        >
          {task.title}
        </Typography>

        <Divider sx={{ borderStyle: "solid", borderColor: "#f1f5f9", mb: 1.5 }} />

        <Stack direction="row" spacing={3} alignItems="center">
          <Stack direction="row" spacing={0.75} alignItems="center" sx={{ color: "#64748b" }}>
            <CheckCircleOutlinedIcon sx={{ fontSize: 14, color: "#10b981" }} />
            <Typography variant="caption" fontWeight={500} sx={{ fontSize: "0.75rem" }}>
              Status: Active
            </Typography>
          </Stack>

          <Stack direction="row" spacing={0.75} alignItems="center" sx={{ color: "#64748b" }}>
            <AccessTimeIcon sx={{ fontSize: 14 }} />
            <Typography variant="caption" fontWeight={500} sx={{ fontSize: "0.75rem" }}>
              Registered: {timestamp}
            </Typography>
          </Stack>
        </Stack>

      </CardContent>
    </Card>
  );
}

export default WorkloadCard;