const Gallery = () => {
    const pics = [
        {
            "path":"/assets/desktop/image-woman-in-videocall.jpg",
            "alt":"pics1"
        },
        {
            "path":"/assets/desktop/image-women-videochatting.jpg",
            "alt":"pics2"
        },
        {
            "path":"/assets/desktop/image-men-in-meeting.jpg",
            "alt":"pics3"
        },
        {
            "path":"/assets/desktop/image-man-texting.jpg",
            "alt":"pics4"
        }
    ]
    return (
        <div className="container-gallery">
            {
                pics.map((item, index) => {
                    return (
                        <div key={index} className="container-pic">
                            <img className="pic" src={item.path} alt={item.alt}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Gallery