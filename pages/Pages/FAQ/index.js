import { Box, Typography, useTheme } from '@mui/material'
import Header from '../../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'
import { color } from '@mui/system'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px'>
      <Header title='FAQs' subtitle='Frequently Asked Questions Page' />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>An Important question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas, autem maxime delectus provident consectetur natus suscipit ea illum porro commodi. Cupiditate deleniti id laborum inventore corporis, repellendus commodi mollitia.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>Another Important question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas, autem maxime delectus provident consectetur natus suscipit ea illum porro commodi. Cupiditate deleniti id laborum inventore corporis, repellendus commodi mollitia.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>Random question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas, autem maxime delectus provident consectetur natus suscipit ea illum porro commodi. Cupiditate deleniti id laborum inventore corporis, repellendus commodi mollitia.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>Favorite question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas, autem maxime delectus provident consectetur natus suscipit ea illum porro commodi. Cupiditate deleniti id laborum inventore corporis, repellendus commodi mollitia.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>Final question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas, autem maxime delectus provident consectetur natus suscipit ea illum porro commodi. Cupiditate deleniti id laborum inventore corporis, repellendus commodi mollitia.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ
