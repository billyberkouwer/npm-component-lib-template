import ReactPlayer from "react-player";
export default function VideoComponent({src}: {src: string}) {
    return (
        <ReactPlayer url={src} />
    )
}