import styles from './BackgroundVideo.module.scss';

const BackgroundVideo = () => {
  return (
    <div className={styles.container}>
      <video
        id="video"
        width="100%"
        height="100%"
        preload="auto"
        className={styles.video}
        autoPlay
        loop
        playsInline
        muted
        webkit-playsinline="true"
      >
        <source src="/video/sphere.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
