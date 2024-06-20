import { Box, Container, Grid, Paper } from "@mui/material";

import BoxNavigation from "./boxNavigation/BoxNavigation";
import BoxNoti from "./boxNoti/BoxNoti";
import LearningProgress from "./chart/learningProgress/LearningProgress";
import LearningResults from "./chart/learningResults/LearningResults";
import Courses from "./chart/courses/Courses";
import InforSV from "./inforSV/InforSV";

const Dashboard = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
        <Grid item xs={7}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box component={Paper} sx={{ padding: "5px 10px" }}>
                <InforSV />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box component={Paper} sx={{ padding: "5px 10px" }}>
                <BoxNoti />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box component={Paper} sx={{ padding: "5px 10px" }}>
                <BoxNoti />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container sx={{ height: "100%" }}>
            <Grid item xs={12}>
              <Box
                component={Paper}
                sx={{ padding: "5px 10px", height: "100%" }}
              >
                <BoxNoti />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box>
        <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
          <Grid item xs={1.5}>
            <Box component={Paper} sx={{}}>
              <BoxNavigation />
            </Box>
          </Grid>
          <Grid item xs={1.5}>
            <Box component={Paper} sx={{}}>
              <BoxNavigation />
            </Box>
          </Grid>
          <Grid item xs={1.5}>
            <Box component={Paper} sx={{}}>
              <BoxNavigation />
            </Box>
          </Grid>
          <Grid item xs={1.5}>
            <Box component={Paper} sx={{}}>
              <BoxNavigation />
            </Box>
          </Grid>
          <Grid item xs={1.5}>
            <Box component={Paper} sx={{}}>
              <BoxNavigation />
            </Box>
          </Grid>
          <Grid item xs={1.5}>
            <Box component={Paper} sx={{}}>
              <BoxNavigation />
            </Box>
          </Grid>
          <Grid item xs={1.5}>
            <Box component={Paper} sx={{}}>
              <BoxNavigation />
            </Box>
          </Grid>

          <Grid item xs={1.5}>
            <Box component={Paper} sx={{}}>
              <BoxNavigation />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <LearningResults />
        </Grid>
        <Grid item xs={3}>
          <LearningProgress />
        </Grid>
        <Grid item xs={4}>
          <Courses />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
