import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTranslation } from "react-i18next";

// الصور
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import v1 from "../assets/v1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";
import v4 from "../assets/v4.png";
import v5 from "../assets/v5.png";
import v6 from "../assets/v6.png";
import v7 from "../assets/v7.png";
import v8 from "../assets/v8.png";
import v9 from "../assets/v9.png";
import csharpImg from "../assets/C.png"; // صورة قسم C#
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";
import c8 from "../assets/c8.png";
import c9 from "../assets/c9.png";

// البيانات
const projects = [
  {
    title: { en: "C# Desktop Application" },
    desc: {
      en: "A complete sales and accounting desktop app built using C# and RDLC for reporting.",
    },
    image: csharpImg,
    link: "#",
  },
  {
    title: { en: "E-commerce Platform" },
    desc: { en: "Full-stack e-commerce app with Node.js backend." },
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
  {
    title: { en: "UI/UX Design System" },
    desc: { en: "Reusable UI/UX components and design guidelines." },
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
];

const galleryMap = {
  "C# Desktop Application": [c1, c2, c3, c4, c5, c6, c7, c8, c9],
  "E-commerce Platform": [p1, p2, p3],
  "UI/UX Design System": [v1, v2, v3, v4, v5, v6, v7, v8, v9],
};

// المكون الرئيسي
export default function ProjectsSection() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);
  const [currentGallery, setCurrentGallery] = useState([]);

  const handleOpenGallery = (images) => {
    setCurrentGallery(images);
    setSelectedImg(0);
    setOpen(true);
  };

  const handleCloseGallery = () => setOpen(false);
  const handlePrev = () => {
    setSelectedImg((prev) =>
      prev === 0 ? currentGallery.length - 1 : prev - 1
    );
  };
  const handleNext = () => {
    setSelectedImg((prev) =>
      prev === currentGallery.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box sx={{ py: 8, px: 2, background: "none" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 6, color: "#fff", fontWeight: "bold", letterSpacing: 2 }}
      >
        {t("projects_section")}
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, idx) => (
          <Grid
            item
            key={idx}
            sx={{
              flex: "1 1 360px",
              maxWidth: 360,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: 360,
                display: "flex",
                flexDirection: "column",
                background: "rgba(40,40,50,0.45)",
                color: "#fff",
                borderRadius: 6,
                boxShadow: "0 8px 32px 0 rgba(31,38,135,0.15)",
                border: "1.5px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                transition: "transform 0.25s, box-shadow 0.25s",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.03)",
                  boxShadow: "0 12px 40px 0 #42a5f5cc",
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={project.image}
                alt={project.title.en}
                sx={{
                  objectFit: "cover",
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: "#42a5f5", fontWeight: "bold", mb: 1 }}
                >
                  {project.title.en}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#bdbdbd", minHeight: 48 }}
                >
                  {project.desc.en}
                </Typography>
              </CardContent>

              {galleryMap[project.title.en] && (
                <CardActions sx={{ mt: "auto", pb: 2, px: 2 }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      background:
                        "linear-gradient(90deg, #42a5f5 0%, #1976d2 100%)",
                      color: "#fff",
                      fontWeight: "bold",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #64b5f6 0%, #1976d2 100%)",
                      },
                    }}
                    onClick={() =>
                      handleOpenGallery(galleryMap[project.title.en])
                    }
                  >
                    View Project
                  </Button>
                </CardActions>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={open}
        onClose={handleCloseGallery}
        maxWidth={false}
        PaperProps={{
          sx: {
            width: "90vw",
            maxWidth: "1200px",
            height: "85vh",
            background: "#181d23",
            borderRadius: 4,
          },
        }}
      >
        <DialogContent
          sx={{
            position: "relative",
            height: "100%",
            p: { xs: 2, md: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={handleCloseGallery}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              color: "#fff",
              zIndex: 3,
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              position: "relative",
              mt: 2,
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                color: "#42a5f5",
                position: "absolute",
                left: { xs: 8, md: 16 },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                background: "rgba(30,30,40,0.7)",
                "&:hover": { background: "rgba(66,165,245,0.15)" },
                width: 48,
                height: 48,
              }}
            >
              <ArrowBackIosNewIcon fontSize="large" />
            </IconButton>

            <Box
              component="img"
              src={currentGallery[selectedImg]}
              alt={`main-img-${selectedImg}`}
              sx={{
                maxWidth: "100%",
                maxHeight: "75vh",
                objectFit: "contain",
                borderRadius: 3,
                border: "3px solid #42a5f5",
                boxShadow: "0 12px 40px #42a5f5aa",
                mb: 3,
                transition: "all 0.3s",
              }}
            />

            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              flexWrap="wrap"
            >
              {currentGallery.map((img, idx) => (
                <Box
                  key={idx}
                  component="img"
                  src={img}
                  alt={`thumb-${idx}`}
                  onClick={() => setSelectedImg(idx)}
                  sx={{
                    cursor: "pointer",
                    width: 90,
                    height: 60,
                    objectFit: "cover",
                    borderRadius: 2,
                    border:
                      selectedImg === idx
                        ? "2px solid #42a5f5"
                        : "1px solid #555",
                    opacity: selectedImg === idx ? 1 : 0.6,
                    boxShadow:
                      selectedImg === idx
                        ? "0 6px 20px #42a5f5aa"
                        : "0 2px 6px #00000055",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </Stack>

            <IconButton
              onClick={handleNext}
              sx={{
                color: "#42a5f5",
                position: "absolute",
                right: { xs: 8, md: 16 },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                background: "rgba(30,30,40,0.7)",
                "&:hover": { background: "rgba(66,165,245,0.15)" },
                width: 48,
                height: 48,
              }}
            >
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
