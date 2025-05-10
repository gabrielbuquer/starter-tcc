import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });

import {
  VideoBox,
} from './Video.styled';

export type VideoProps = {
  title: string;
  width?: string;
  height?: string;
  src: string;
  controls?: boolean;
  isAutoplay?: boolean;
};

export const Video = (
    {
      title,
      width = '100%',
      height = '100%',
      src,
      controls = true,
      isAutoplay = false,
    }: VideoProps,
  ) => {
    const handleProgressChange = (progress: number) => {
      console.log('progress', progress);
    }

    return (
      <VideoBox>
        <ReactPlayer
          data-testid="video-element"
          controls={controls}
          url={src}
          progressInterval={200}
          playing={isAutoplay}
          muted
          playsinline
          loop
          width={width}
          height={height}
          onProgress={(progressData) =>
            handleProgressChange(progressData.played)
          }
          aria-label={title}
        />
      </VideoBox>
    );
  };
