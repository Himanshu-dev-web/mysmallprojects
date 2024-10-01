import React,{useState} from 'react'
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { MusicNoteOutlined, NewReleasesOutlined } from '@mui/icons-material';
import Main from './Main';


const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    
    const toggleSidebar = () => {
      setIsCollapsed(!isCollapsed);

      setTimeout(() => {
          if(isCollapsed) {
               setIsCollapsed(!isCollapsed);
          }
          else{
               setIsCollapsed(isCollapsed);
          }
      }, 7000);
    };
  

  
    return (
      <div className="flex  relative">
        <div
          className={`${
            isCollapsed ? 'w-[12rem]' : 'w-[2.5rem]'
          }  h-[100%] fixed z-10   top-16   bg-zinc-800  transition-all duration-500 ease-in-out`}
        >
          <div className="flex items-center justify-center h-12 bg-gray-900">
          {isCollapsed ? (
                  
            <button onClick={toggleSidebar}>
            <svg className="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>
            </button>
                ) : (
                    <button onClick={toggleSidebar}>
            <svg className="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>
            </button>
                     )}
          </div>
          <nav className="h-full flex flex-col items-center justify-start p-4">
           
            <div  className=" flex flex-row items-center   text-gray-300 hover:bg-gray-700 hover:text-white px-3  rounded-md text-sm font-medium mb-2">
                 <div className='w-[30%]'>
                <HomeIcon/>
                 </div>
                 <div  className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>Home</p>
                 </div>
            </div>

            <div  className=" flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3  rounded-md text-sm font-medium mb-2">
                 <div className='w-[20%]'>
                 <ExploreOutlinedIcon/>
                 </div>
                 <div className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>Explore</p>
                 </div>
            </div>

            <div  className=" flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3  rounded-md text-sm font-medium mb-2">
                 
                 <div className='w-[20%]'>
                 <SubscriptionsOutlinedIcon />
                 </div>
                 <div className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>Subscription</p>
                 </div>
            </div>

            
            <div  className=" flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3  rounded-md text-sm font-medium mb-2">
                 <div className='w-[20%]'>
                 <VideoLibraryOutlinedIcon />
                 </div>
                 <div className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>Library</p>
                 </div>
            </div>

            <div  className=" flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium mb-2">
                 <div className='w-[20%]'>
                 <HistoryOutlinedIcon/>
                 </div>
                 <div className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>History</p>
                 </div>
            </div>

            <hr className="w-[100%] h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div  className=" flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3  rounded-md text-sm font-medium mb-2">
                 <div className='w-[20%]'>
                 <MovieOutlinedIcon/>
                 </div>
                 <div className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>Movie</p>
                 </div>
            </div>

            <div  className=" flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3  rounded-md text-sm font-medium mb-2">
                 <div className='w-[20%]'>
                 <SportsBasketballOutlinedIcon/>
                 </div>
                 <div className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>Sports</p>
                 </div>
            </div>

            <div  className=" flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3  rounded-md text-sm font-medium mb-2">
                 <div className='w-[20%]'>
                 <SportsEsportsOutlinedIcon/>
                 </div>
                 <div className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>Gaming</p>
                 </div>
            </div>

            <div  className=" flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3  rounded-md text-sm font-medium mb-2">
                 <div className='w-[20%]'>
                 <LibraryMusicOutlinedIcon/>
                 </div>
                 <div className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>Music</p>
                 </div>
            </div>

            <div  className=" flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3  rounded-md text-sm font-medium mb-2">
                 <div className='w-[20%]'>
                 <LiveTvOutlinedIcon/>
                 </div>
                 <div className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>Live</p>
                 </div>
            </div>

            <div  className=" flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3  rounded-md text-sm font-medium mb-2">
                 <div className='w-[20%]'>
                 <ArticleOutlinedIcon/>
                 </div>
                 <div className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>News</p>
                 </div>
            </div>


            <hr className="w-[100%] h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div  className=" flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3  rounded-md text-sm font-medium mb-2">
                 <div className='w-[20%]'>
                 <SettingsOutlinedIcon/>
                 </div>
                 <div className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>Setting</p>
                 </div>
            </div>

            <div  className=" flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium mb-2">
                 <div className='w-[20%]'>
                 <FlagOutlinedIcon/>
                 </div>
                 <div className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>Report</p>
                 </div>
            </div>

            <div  className=" flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium mb-2">
                 <div className='w-[20%]'>
                 <HelpOutlineOutlinedIcon/>
                 </div>
                 <div className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>Help</p>
                 </div>
            </div>

            <div className=" flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium mb-2">
                 <div className='w-[20%]'>
                 <SettingsBrightnessOutlinedIcon/>
                 </div>
                 <div className={`${
            isCollapsed ? 'block' : 'hidden'
          } w-[70%]`}>
                 <p className='px-6'>LightMode</p>
                 </div>
            </div>
          </nav>
        </div>
        
        <div className="flex-1 z-0">
                <Main/>
        </div>
      </div>
    );
}

export default Sidebar