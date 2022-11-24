import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">AlexSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="search for friends,post or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timelines</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">3</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">2</span>
            </div>
            <img src="/assets/user.png" alt="" className="topbarImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
