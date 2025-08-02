import { Box, Typography, Button, Stack, Avatar, Paper } from "@mui/material";
import { FaDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import profileImg from "../assets/profile.jpeg";

const blueBtnGradient = "linear-gradient(90deg, #42a5f5 0%, #1976d2 100%)";

export default function HeroSection() {
  const { t } = useTranslation();
  const avatarUrl = profileImg;

  return (
    <Box
      sx={{
        minHeight: { xs: "80vh", md: "70vh" },
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 0 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1200,
          background: "transparent",
          boxShadow: "none",
        }}
      >
        {/* Left: Text */}
        <Box
          sx={{
            flex: 1,
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            pr: { md: 6 },
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              mb: 1,
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" },
              lineHeight: 1.1,
            }}
          >
            Hi, I'm Yihea Aladawi
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#42a5f5",
              mb: 2,
              fontSize: { xs: "1.4rem", md: "2rem" },
            }}
          >
            Software Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#b0c4d4",
              mb: 4,
              maxWidth: 500,
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            I build modern, responsive web applications with a focus on clean
            code, beautiful interfaces, and seamless user experiences. Let’s
            create something amazing together!
          </Typography>
          <Stack direction="row" spacing={2}>
           
            <a
              href="/temp.pdf"
              download="Yihea_Aladawi_CV.pdf"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "#42a5f5",
                  color: "#42a5f5",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "rgba(66,165,245,0.08)",
                    borderColor: "#1976d2",
                    color: "#1976d2",
                  },
                }}
              >
                DOWNLOAD CV
              </Button>
            </a>
          </Stack>
        </Box>
        {/* Right: Profile Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "center",
          }}
        >
          <Avatar
            src={avatarUrl}
            alt="profile"
            sx={{
              width: { xs: 180, md: 260 },
              height: { xs: 180, md: 260 },
              boxShadow: "0 8px 40px #2196f355",
              border: "6px solid #1a2733",
              background: "#fff",
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
}
