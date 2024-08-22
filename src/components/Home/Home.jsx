import React from 'react'
import {Box, Typography} from '@mui/material'
import Charts from '../Charts/Charts'

const Home = () => {
  return (
    <div>
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 15,
          }}
        >
          <Typography variant='h3' fontSize={{xs:'35px'}} fontFamily="Nunito" fontWeight={700} color='#31363F' margin='15px'>
            Welcome!
          </Typography>
          <Typography variant='h5' fontSize={{xs:'20px'}} fontFamily="Nunito" fontWeight={600} marginBottom='25px' color="#31363F">
            Have a look on key insights and forecast, topic, sectors, region and sources. 📈
          </Typography>
        </Box>
        <Charts />
    </div>
  )
}

export default Home