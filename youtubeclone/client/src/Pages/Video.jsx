import React,{useState} from 'react'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
const Video = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(["comment", "setComment"]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [subscribers, setSubscribers] = useState(1000);
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDislikes(dislikes - 1);
      setDisliked(false);
    } else {
      setDislikes(dislikes + 1);
      setDisliked(true);
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
    }
  };

  const handleSubscribe = () => {
    if (subscribed) {
      setSubscribers(subscribers - 1);
      setSubscribed(false);
    } else {
      setSubscribers(subscribers + 1);
      setSubscribed(true);
    }
  };

  const handleShare = () => {
    // Logic for sharing the video
    console.log('Share video');
  };

  const handleAddToPlaylist = () => {
    // Logic for adding the video to a playlist
    console.log('Add to playlist');
  };

  return (
    <>
        <div className="mx-8 md:mx-0 flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-[5rem]">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video Player Section */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <div className="h-[25rem]">
            <iframe className="w-full h-full" width="560" height="300" src="https://www.youtube.com/embed/yIaXoop8gl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            {/* Video Details */}
            <div className="mt-6 ">
              <h2 className="text-xl border-b-2 font-bold">Video Title</h2>
              
              <div className=" md:flex justify-between space-x-4 mt-2 items-center">
             
              <div className='flex justify-between'>
              <p className="text-gray-600 text-sm ">Published on June 4, 2023</p>
              <p className="text-gray-600 text-sm px-2 italic">Views: 10,000</p>
              </div>

                <div className='flex'>

                <button
                  className={`flex mx-2  items-center text-gray-600 ${
                    liked ? 'text-blue-500' : ''
                  }`}
                  onClick={handleLike}
                >
                 <ThumbUpOutlinedIcon/>
                  <span>{likes}</span>
                </button>
                <button
                  className={`flex mx-2 items-center text-gray-600 ${
                    disliked ? 'text-red-500' : ''
                  }`}
                  onClick={handleDislike}
                >
                  <ThumbDownOffAltOutlinedIcon/>
                  <span>{dislikes}</span>
                </button>
                <button
                  className="flex mx-4 items-center text-gray-600"
                  onClick={handleShare}
                >
                <ReplyOutlinedIcon/>
                  <span>Share</span>
                </button>
                <button
                  className="flex items-center text-gray-600"
                  onClick={handleAddToPlaylist}
                >
                  <AddTaskOutlinedIcon/>
                  <span>Add to Playlist</span>
                </button>
                </div>

              </div>
              <p className="text-gray-600 text-sm italic">Likes: 500</p>
              <p className="text-gray-600 text-sm italic">Dislikes: 20</p>

              <div className="border-t py-2 my-2 border-b border-gray-300 flex justify-between items-center">
                  <div className='md:flex cursor-pointer items-center'>
                  <img className="w-8 h-8 mx-2 rounded-full shadow-lg" src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg" alt="Bonnie image"/>
              <div className='flex flex-col'>
                <h4 className="text-sm cursor-pointer  font-medium tracking-tight text-black">
                   Channal Name
                </h4>
                <h4 className='my-1 font-semibold text-xs text-zinc-600' >150k Subscribers</h4>
                </div>
                  </div>

                  <div>
                  <button
                  className={`flex px-2 py-1 rounded items-center bg-red-600 text-white 
                  `}
                  onClick={handleSubscribe}
                >
                 
                  <span>Subscribe</span>
                </button>
                  </div>
            
            </div>
              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ut leo ac mauris fringilla eleifend. Aliquam erat
                volutpat. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas.
              </p>
            </div>
          
            
          </div>
          {/* Recommended Videos */}
          <div className="md:w-1/3 md:pl-6 mt-6 md:mt-0">
            <h3 className="text-lg font-bold mb-2">Up Next</h3>
            {/* Recommended Video 1 */}
            <div className="border-t border-gray-300 py-4">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-20 object-cover"
                    src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                    alt="Video Thumbnail"
                  />
                </div>
                <div>
                  <h4 className="text-base font-medium">
                    Next Video Title
                  </h4>
                  <p className="text-gray-600 text-xs">Channel Name</p>
                  <p className="text-gray-600 text-xs  italic">Views: 10,000</p>

                </div>
              </div>
            </div>
            {/* Recommended Video 2 */}
            <div className="border-t border-gray-300 py-4">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-20 object-cover"
                    src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                    alt="Video Thumbnail"
                  />
                </div>
                <div>
                  <h4 className="text-base font-medium">
                    Next Video Title
                  </h4>
                  <p className="text-gray-600 text-xs">Channel Name</p>
                  <p className="text-gray-600 text-xs  italic">Views: 10,000</p>

                </div>
              </div>
            </div>
            {/* Recommended Video 3 */}
            <div className="border-t border-gray-300 py-4">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-20 object-cover"
                    src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                    alt="Video Thumbnail"
                  />
                </div>
                <div>
                  <h4 className="text-base font-medium">
                    Next Video Title
                  </h4>
                  <p className="text-gray-600 text-xs">Channel Name</p>
                  <p className="text-gray-600 text-xs  italic">Views: 10,000</p>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comment Section */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Comments</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <input
                type="text"
                value={comment}
                onChange={handleInputChange}
                className="flex-grow w-full bg-white border border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none"
                placeholder="Add a comment..."
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="mt-4">
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-100 px-4 py-2 rounded mt-2">
              <div className="border-t py-2 my-2 border-b border-gray-300 flex-col  items-center">
                  <div className='md:flex cursor-pointer items-center mb-2'>
                  <img className="w-8 h-8 mx-2 rounded-full shadow-lg" src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg" alt="Bonnie image"/>
              <div className='flex flex-col'>
                <h4 className="text-xs cursor-pointer  font-medium tracking-tight text-zinc-700">
                   Channal Name
                </h4>
                </div>
                  </div>

                  <div >
                  <h1 className='italic'>{comment}</h1>
                  </div>
            
            </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Video