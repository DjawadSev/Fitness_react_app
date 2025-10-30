import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!Array.isArray(exerciseVideos)) {
    return (
      <Stack
        direction="row"
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        <Loader />
      </Stack>
    );
  }

  const displayedVideos = exerciseVideos
    .filter((item) => item?.video?.videoId && item?.video?.thumbnails?.length)
    .slice(0, 3);

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' }, mb: { lg: '50px', xs: '50px' } }} p="20px">
      <Typography variant='h3' mb="33px">
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      {!displayedVideos.length ? (
        <Typography variant='h6'>
          No exercise videos were found for this exercise.
        </Typography>
      ) : (
        <Stack
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
          sx={{
            flexDirection: { lg: 'row' },
            gap: { lg: '110px', xs: '0' },
          }}
        >
          {displayedVideos.map((item) => (
            <a
              key={item.video.videoId}
              className='exercise-video'
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'
              rel='noreferrer'
            >
              <img src={item.video.thumbnails?.[0]?.url} alt={item.video.title} />
              <Box>
                <Typography variant='h5' color="#ff2625">
                  {item.video.title}
                </Typography>
                <Typography variant='h6' color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default ExerciseVideos;
