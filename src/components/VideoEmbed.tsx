    const VideoEmbed = ({ videoId, title }) => {
    return `
        <div class="video-embed">
        <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/watch?si=-BOeN0VVjb9qkqG_&v=ujvsIzxuBS0&feature=youtu.be${videoId}" 
            title="${title}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
        </div>
    `;
    };

    export default VideoEmbed;