import { Box, Card, CardContent, Skeleton, Stack } from "@mui/material";

function TaskSkeleton() {
 
  const skeletonRows = [1, 2, 3];

  return (
    <Stack spacing={2}>
      {skeletonRows.map((item) => (
        <Card
          key={item}
          elevation={0}
          sx={{
            borderRadius: 3,
            border: "1px solid #e2e8f0",
            background: "#ffffff",
          }}
        >
          <CardContent sx={{ p: "20px !important" }}>
            
           
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
              <Skeleton variant="rounded" width={60} height={18} sx={{ borderRadius: "4px" }} />
            </Box>

            
            <Skeleton variant="text" width="85%" height={24} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="40%" height={24} sx={{ mb: 2 }} />

           
            <Skeleton variant="rectangular" width="100%" height={1} sx={{ my: 1.5 }} />

           
            <Stack direction="row" spacing={3} alignItems="center">
              <Stack direction="row" spacing={0.75} alignItems="center">
                <Skeleton variant="circular" width={14} height={14} />
                <Skeleton variant="text" width={80} height={16} />
              </Stack>

              <Stack direction="row" spacing={0.75} alignItems="center">
                <Skeleton variant="circular" width={14} height={14} />
                <Skeleton variant="text" width={110} height={16} />
              </Stack>
            </Stack>

          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default TaskSkeleton;