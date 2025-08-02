import { Box, Typography, Stack, Chip } from '@mui/material';

export default function AboutMeSection() {
  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
        color: '#e0e0e0',
        marginTop: 17,
        marginBottom: 10,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        About Me
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: 750,
          fontSize: 20,
          lineHeight: 1.7,
          textAlign: 'center',
          mb: 3,
        }}
      >
        I'm <strong>Yihea Aladawi</strong>, a passionate software developer with
        <strong> 5+ years of experience</strong> building web applications. I specialize
        in both frontend and backend development, and I care deeply about clean UI/UX.
      </Typography>

      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          flexWrap: 'wrap',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <Chip label="React" variant="outlined" color="info" />
        <Chip label="Node.js" variant="outlined" color="info" />
        <Chip label="UI/UX" variant="outlined" color="info" />
        <Chip label="C#" variant="outlined" color="info" />
      </Stack>

      <Typography
        variant="body2"
        sx={{
          fontSize: 17,
          textAlign: 'center',
          maxWidth: 650,
          color: '#bbbbbb',
        }}
      >
        I hold certifications in Frontend (React), Backend (Node.js), and UI/UX.  
        <br />
        I’m currently self-learning C# and working on real-world projects using it.
      </Typography>
    </Box>
  );
}
