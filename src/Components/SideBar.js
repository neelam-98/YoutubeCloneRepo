import React from "react";
import {HomeOutlined, SortDescendingOutlined, SubnodeOutlined, HistoryOutlined, FieldTimeOutlined, LikeFilled,DownloadOutlined, YoutubeFilled} from "@ant-design/icons";
import SideBarRow from "./SideBarRow";
import "../Style/SideBar.css";

const SideBar = () => {
    return (
        <div className='sidebar'>
            <SideBarRow Icon={HomeOutlined} title='Home' />
            <SideBarRow Icon={SortDescendingOutlined} title='Trending' />
            <SideBarRow Icon={SubnodeOutlined} title='Subscription' />
            <hr />
            <SideBarRow Icon={YoutubeFilled} title='Library' />
            <SideBarRow Icon={HistoryOutlined} title='History' />
            <SideBarRow Icon={FieldTimeOutlined} title='Watch Later' />
            <SideBarRow Icon={DownloadOutlined } title='Downloads' />
            <SideBarRow Icon={LikeFilled} title='Your videos' />
            <hr />
        </div>
    )
}

export default SideBar;