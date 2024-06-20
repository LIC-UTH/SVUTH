import { RecentActors } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BoxNavigation = () => {
  return (
    <Box
      component={Link}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ padding: "10px" }}>
        <RecentActors
          sx={{
            fontSize: "30px",
            // padding:'5px'
          }}
        />
      </Box>
      <Box sx={{ padding: "10px 0" }}>
        <Typography
          sx={{
            fontSize: "13px",
            textAlign: "center",
            // padding:'10px'
          }}
        >
          Thông tin sinh viên
        </Typography>
      </Box>
    </Box>
  );
};

export default BoxNavigation;
