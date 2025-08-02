import React from 'react';
import { Box } from '@mui/material';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3 }, // ✅ padding على الجوانب لجميع الشاشات
        py: 6,                // مسافة من الأعلى والأسفل
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 1200 }}>
        <ContactSection />
      </Box>
    </Box>
  );
}
