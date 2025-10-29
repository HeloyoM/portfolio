import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Expand } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Syllabus: React.FC = () => {
  const [autoOpen, setAutoOpen] = useState<boolean>(false);
  const location = useLocation();

  const { t } = useTranslation();
  const navigate = useNavigate();

  const syllabusData = Array.from({ length: 14 }, (v, k) => v);

  useEffect(() => {
    if (location.hash === '#syllabus') {

      setAutoOpen(prev => true)

      const section = document.getElementById('syllabus');

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Accordion
      id="syllabus"
      onClick={() => {
        if(!autoOpen) navigate('/#syllabus')
      }}
      sx={{
        background: 'linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)',
        borderRadius: '20px',
        margin: '2% 0',
        padding: 0,
        boxShadow: 3,
        '&:before': { display: 'none' }
      }}
      expanded={autoOpen}
      onChange={() => {
        if (autoOpen) {
          setAutoOpen(prev => false)
          navigate('/', { replace: true });
        }

      }}
    >
      <AccordionSummary
        expandIcon={<Expand />}
        sx={{
          backgroundColor: '#81c784',
          borderRadius: '20px 20px 0 0',
          minHeight: 60,
          '& .MuiTypography-root': { fontWeight: 'bold', fontSize: '1.4rem' }
        }}
      >
        <Typography sx={{ fontSize: '1.25rem' }}>סילבוס קורס פיתוח תוכנה (Full Stack)</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 3, backgroundColor: '#f1f8e9', borderRadius: '0 0 20px 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
            {/* <Typography variant="h5" align="center" gutterBottom>סילבוס קורס פיתוח תוכנה (Full Stack)</Typography> */}
            <Table>
              <TableHead sx={{ backgroundColor: '#aed581' }}>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>שבוע</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>נושא מרכזי</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>תכנים מפורטים</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>תרגילים / מטלות</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {syllabusData.map((row, index) => (
                  <TableRow
                    key={index}
                    hover
                    sx={{
                      '&:hover': { backgroundColor: '#dcedc1' },
                      transition: '0.3s'
                    }}
                  >
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">{t(`syllabus.week_${index}.topic`)}</TableCell>
                    <TableCell align="center">{t(`syllabus.week_${index}.content`)}</TableCell>
                    <TableCell align="center">{t(`syllabus.week_${index}.exercise`)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Syllabus;
