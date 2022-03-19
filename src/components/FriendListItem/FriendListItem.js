import PropTypes from 'prop-types';
import stylen from './FriendListItem.module.css';
import friends from '../../friends.json';


 

function FriendListItem ({avatar, name, isOnline}) {
    return (
        friends.map(friend => (
            
            <li className={stylen.item} key={friend.id}>
            {friend.isOnline ? <span className={stylen.status}></span> : 
            <span className={stylen.statusfalse}></span>}      
                
                <img
                    className={stylen.avatar}
                    src={friend.avatar}
                    alt="User avatar"
                    width="48"
                    />
                <p className={stylen.name}>{friend.name}</p>
                
                
            </li>
        ))
        
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}

export default FriendListItem;