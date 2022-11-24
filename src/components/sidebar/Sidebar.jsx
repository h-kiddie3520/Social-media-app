import "./sidebar.css";
import { RssFeed, Chat, Phone } from "@material-ui/icons";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">feed</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">feed</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">feed</span>
          </li>
          <li className="sidebarListItem">
            <Phone className="sidebarIcon" />
            <span className="sidebarListItemText">phone</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">feed</span>
          </li>
        </ul>
        <button className="sidebarButton">show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/user.png" alt="" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
