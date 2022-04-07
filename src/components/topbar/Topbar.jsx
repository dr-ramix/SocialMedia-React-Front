/* eslint-disable jsx-a11y/img-redundant-alt */
import "./topbar.css"
import {Search, Person, Chat, Notifications } from '@mui/icons-material';


export default function Topbar(){
    return(
        <div className="topbarContainer">          
            <div className="topbarLeft">
                <apan className="logo">Board</apan>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="search..." className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarlinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcon">
                    <div className="topbarIconItems">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                        
                    </div>
                    <div className="topbarIconItems">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItems">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/7.jpeg" alt="profile" className="topbarImg"/>
            </div>
        </div>
    )
}