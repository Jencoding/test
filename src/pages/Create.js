import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Create() {
  return (
    <Container>
      {/* <Typography 
      variant='h1'
      color='primary'
      align='center'
      >Create New Note
      </Typography> */}
      {/* <Typography 
      noWrap
      color='secondary'
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography> */}
      <Typography 
      variant='h6'
      color='textSecondary'
      component='h2'
      gutterBottom>
        Create A New Note
      </Typography>
      {/* Styles like h6, but want it to be h2 tag */}

      <Button 
      onClick={() => console.log('Clicked')}
      type='submit' 
      color='secondary'
      variant='contained'
      startIcon={<SendIcon />}
      endIcon={<KeyboardArrowRightIcon />}
      >
        SUBMIT</Button>
      {/* <ButtonGroup
      color='secondary'
      variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
      <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon 
      color='secondary'
      fontSize='large' />
      <AcUnitOutlinedIcon 
      color='action'
      fontSize='small' />
      <AcUnitOutlinedIcon 
      color='error'
      fontSize='small' />
      <AcUnitOutlinedIcon 
      color='disabled'
      fontSize='small' />
    </Container>
    
  )
}



// Without specifying variant, the default will be p

// Container: the elements don't stick to the edge of viewport.