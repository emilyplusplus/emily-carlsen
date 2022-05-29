import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Stack } from '@mui/material';

import TwitterIcon from '@mui/icons-material/Twitter';

import profilePic from './images/emily.jpg'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emily Carlsen</title>
        <meta name="description" content="Emily Carlsen Portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Card sx={{ minWidth: 800, maxWidth: 800, padding: 3, borderRadius: '10px' }} raised={true}>
          <CardContent>
            <Stack direction="row" sx={{ marginBottom: 4 }}>
              <Avatar className={styles.avatar} sx={{ width: 220, height: 220, marginRight: 3 }}>
                <Image
                  src={profilePic}
                  alt="Profile picture of Emily Carlsen"/>
              </Avatar>
              <Stack sx={{marginTop: 3}}>
                <Typography variant='h2' sx={{marginLeft: '-5px'}}>Emily Carlsen</Typography>
                <Typography variant='caption' sx={{marginTop: '-5px'}}>(she/her)</Typography>
                <Typography variant='subtitle1' sx={{marginTop: 2}}>
                  What I Do: Passionate thinker/problem solver, using code and modern software development to help solve peoples' problems!
                </Typography>
              </Stack>
            </Stack>
            <Typography sx={{marginBottom: 2}}>
              Hobbies: DIY, Interior Design, Movies/TV, YouTube, Podcasts, Cars, PC &amp; Console Gaming, Tech, Photography/Videography
            </Typography>
            <Typography sx={{marginBottom: 2}}>
              Socials:
            </Typography>
            <Typography>
              Featured Application: <a href='https://jsoninspect.com/' target='_blank'>https://jsoninspect.com/</a>
            </Typography>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default Home
