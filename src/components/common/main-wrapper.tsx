import { Box } from "@mui/material";

export const MainWrapper = ({ children }: any) => {
  return (
    <Box
      width="60%"
      minHeight="850px"
      sx={{ backgroundColor: "black", color: "white" }}
      m="auto"
      mt={1}
      mb={1}
    >
      {children}
    </Box>
  );
};
