import { Box, Typography } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";

const BoxNoti = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box>
          <Typography sx={{ fontSize: "13px", color: "rgb(102, 117, 128)" }}>
            Nhắc nhở mới, chưa xem
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "700",
              color: "rgb(102, 117, 128)",
            }}
          >
            0
          </Typography>
        </Box>
        <Box component={Link}>
          <Typography sx={{ color: "red", fontSize: "13px" }}>
            Xem chi tiết
          </Typography>
        </Box>
      </Box>
      <Box>
        <NotificationsNoneIcon sx={{ fontSize: "20px" }} />
      </Box>
    </Box>
  );
};

export default BoxNoti;
