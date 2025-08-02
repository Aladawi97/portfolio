import React, { useRef, useState } from 'react';
import {
  Box, Typography, TextField, Button, Stack, IconButton, Paper, Snackbar, Alert
} from '@mui/material';
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const CONTACT_INFO = {
  phone: '+962788682209',
  email: 'Yihea.aladawi1001@gmail.com',
  address: { en: 'AMMAN - JORDAN' },
  social: [
    {
      icon: <WhatsAppIcon sx={{ color: '#25D366' }} />,
      url: 'https://wa.me/962788682209',
    },
    {
      icon: <LinkedInIcon sx={{ color: '#0077b5' }} />,
      url: 'https://www.linkedin.com/in/yihea-adawinco-300035318',
    },
    {
      icon: <InstagramIcon sx={{ color: '#E1306C' }} />,
      url: 'https://www.instagram.com/yiheamaladawi/profilecard/?igsh=OWNtbzlkamJyYzd6',
    },
    {
      icon: <FacebookIcon sx={{ color: '#1877f3' }} />,
      url: 'https://www.facebook.com/share/19WszrKexV/',
    },
  ],
};

export default function ContactSection() {
  const form = useRef();
  const [successOpen, setSuccessOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   emailjs.sendForm(
  'service_ctwk079',            // ✅ Service ID
  'template_4vkctrj',           // ✅ Template ID الصحيح
  form.current,
  'rpFQVDA5y7wjHL9vb'           // ✅ Public Key
)
    .then((result) => {
      console.log(result.text);
      setSuccessOpen(true);
      form.current.reset();
    }, (error) => {
      console.error(error.text);
    });
  };

  return (
    <Box sx={{ py: 8, px: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" align="center" sx={{ mb: 6, color: '#fff', fontWeight: 'bold', letterSpacing: 2 }}>
        Contact
      </Typography>

      <Paper
        elevation={0}
        sx={{
          width: '100%',
          maxWidth: 1000,
          mx: 'auto',
          py: { xs: 3, md: 5 },
          mb: 4,
          borderRadius: 5,
          backgroundColor: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(14px)',
        }}
      >
        <Box
          sx={{
            px: { xs: 2, sm: 3 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
          }}
        >
          {/* Left - Contact Info */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Stack spacing={1.5}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <PhoneIcon sx={{ color: '#42a5f5' }} />
                <Typography sx={{ color: '#fff', fontSize: 17 }}>{CONTACT_INFO.phone}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <EmailIcon sx={{ color: '#42a5f5' }} />
                <Typography sx={{ color: '#fff', fontSize: 17 }}>{CONTACT_INFO.email}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <LocationOnIcon sx={{ color: '#42a5f5' }} />
                <Typography sx={{ color: '#fff', fontSize: 17 }}>{CONTACT_INFO.address.en}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              {CONTACT_INFO.social.map((s, idx) => (
                <IconButton
                  key={idx}
                  href={s.url}
                  target="_blank"
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    '&:hover': { backgroundColor: '#42a5f5' },
                    color: '#fff',
                    width: 44,
                    height: 44,
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Right - Contact Form */}
          <Box
            component="form"
            ref={form}
            onSubmit={handleSubmit}
            sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 3 }}
          >
            <TextField
              name="name"
              label="Name"
              variant="filled"
              fullWidth
              required
              InputProps={{ style: { color: '#fff' } }}
              InputLabelProps={{ style: { color: '#aaa' } }}
              sx={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="filled"
              fullWidth
              required
              InputProps={{ style: { color: '#fff' } }}
              InputLabelProps={{ style: { color: '#aaa' } }}
              sx={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}
            />
            <TextField
              name="title"
              label="Subject"
              variant="filled"
              fullWidth
              required
              InputProps={{ style: { color: '#fff' } }}
              InputLabelProps={{ style: { color: '#aaa' } }}
              sx={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}
            />
            <TextField
              name="message"
              label="Your Message"
              variant="filled"
              fullWidth
              required
              multiline
              minRows={4}
              InputProps={{ style: { color: '#fff' } }}
              InputLabelProps={{ style: { color: '#aaa' } }}
              sx={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}
            />
            <Stack direction="row" justifyContent="flex-end">
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  px: 5,
                  borderRadius: 2,
                  background: 'linear-gradient(90deg, #42a5f5, #1e88e5)',
                  fontWeight: 600,
                  color: '#fff',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #64b5f6, #1976d2)',
                  },
                }}
              >
                Send
              </Button>
            </Stack>
          </Box>
        </Box>
      </Paper>

      <Snackbar open={successOpen} autoHideDuration={3000}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
