import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow selected title='Home' Icon={HomeIcon}/>
            <SidebarRow title='Trending' Icon={WhatshotIcon} />
            <SidebarRow title='Subscription' Icon={SubscriptionsIcon} />
            <hr/>
            <SidebarRow title='Library' Icon={VideoLibraryIcon} />
            <SidebarRow title='History' Icon={HistoryIcon} />
            <SidebarRow title='Your videos' Icon={OndemandVideoIcon} />
            <SidebarRow title='Your movies' Icon={LocalMoviesIcon} />
            <SidebarRow title='Watch later' Icon={QueryBuilderIcon} />
            <SidebarRow title='Liked videos' Icon={ThumbUpAltIcon} />
            <SidebarRow title='More' Icon={ExpandMoreIcon} />
            <hr/>
        </div>
    )
}

export default Sidebar
