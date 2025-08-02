import { Grid, Card, CardContent, Typography, Box, Fade } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { useTranslation } from 'react-i18next';

const blueGradient = 'linear-gradient(135deg, #42a5f5 0%, #1976d2 100%)';

const skills = [
  {
    icon: <CodeIcon sx={{ fontSize: 56, color: '#fff' }} />,
    key: 'frontend',
    desc: { en: 'React, modern UI, SPA' },
  },
  {
    icon: <StorageIcon sx={{ fontSize: 56, color: '#fff' }} />,
    key: 'backend',
    desc: { en: 'Node.js, APIs, Databases' },
  },
  {
    icon: <DeveloperModeIcon sx={{ fontSize: 56, color: '#fff' }} />,
    key: 'csharp',
    desc: { en: 'C#, OOP, .NET' },
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 56, color: '#fff' }} />,
    key: 'uiux',
    desc: { en: 'UI/UX, Prototyping, Figma' },
  },
];

export default function SkillsSection() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Typography
          variant="h4"
          sx={{
            mb: 6,
            color: '#fff',
            fontWeight: 'bold',
            letterSpacing: 2,
            textAlign: 'center',
          }}
        >
          {t('skills')}
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: 1200, margin: '0 auto' }}
      >
        {skills.map((skill, idx) => (
          <Grid
            item
            key={skill.key}
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Fade in timeout={600 + idx * 200}>
              <Card
                sx={{
                  width: 260,     // ثابت
                  height: 320,    // ثابت
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(40,40,50,0.45)',
                  color: '#fff',
                  borderRadius: 8,
                  boxShadow: '0 8px 32px 0 rgba(31,38,135,0.25)',
                  border: '1.5px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  '&:hover': {
                    transform: 'translateY(-10px) scale(1.05)',
                    boxShadow: '0 12px 40px 0 #42a5f5cc',
                  },
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 2,
                  }}
                >
                  <Box
                    sx={{
                      mb: 2,
                      width: 72,
                      height: 72,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: blueGradient,
                      borderRadius: '50%',
                      boxShadow: '0 0 18px 0 #42a5f5',
                    }}
                  >
                    {skill.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      mt: 1,
                      color: '#fff',
                      fontWeight: 'bold',
                      letterSpacing: 1,
                      fontSize: 20,
                      textAlign: 'center',
                    }}
                  >
                    {t(skill.key)}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      color: '#bdbdbd',
                      textAlign: 'center',
                      fontSize: 15,
                    }}
                  >
                    {skill.desc.en}
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
