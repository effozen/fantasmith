import ReactPlayer from "react-player";

export const VideoPlayer = ({ url, playing = false, muted = true }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactPlayer
        playing={playing}
        muted={muted}
        url={url}
        controls
        width="60%"
      />
    </div>
  );
};
