import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            
            <hr/>

            <ChannelRow
            image='https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-9/98358963_1911791658957144_8536280984365039616_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=f_lmQcoBQngAX8LCVMa&_nc_ht=scontent-maa2-2.xx&oh=702258ce1f6583ba791724ffd1f3121f&oe=5FCEA460'
            channel='Dummy Channel'
            verified
            subs="650K"
            noOfVideos='350'
            description='Proramming channel for begineers|Proramming channel for begineers|Proramming channel for begineers|Proramming channel for begineers|' />
            
            <hr/>

            <VideoRow
            views='1.4M'
            subs = '650K'
            title='Dummy Title'
            desciption = 'Dummy Description'
            timestamp ='30 minutes ago'
            channel = 'Dummy Channel'
            image ='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'/>
        </div>
    )
}

export default SearchPage;
