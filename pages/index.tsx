import type { NextPage } from 'next'
import Head from 'next/head'
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
        <Card sx={{ minWidth: 400 }}>
          <CardContent>
            <Stack direction="row" sx={{marginBottom: 2}}>
              <Avatar sx={{ width: 128, height: 128, marginRight: 2 }} alt="Emily Carlsen" src="/favicon.png" />
              <Stack>
                <Typography>Emily Carlsen</Typography>
                <Typography>she/her</Typography>
                <Typography>What I do: Passionate thinker/problem solver, using code and modern software development to help solve peoples' problems!</Typography>
                <Typography>Other stuff I enjoy: DIY, Interior Design, Movies/TV, YouTube, Podcasts, Cars, PC &amp; Console Gaming, Tech, Photography/Videography</Typography>
              </Stack>
            </Stack>
            <Typography>
              Where to find me:
            </Typography>
            <Typography>
              Cool stuff I've made:
            </Typography>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default Home
