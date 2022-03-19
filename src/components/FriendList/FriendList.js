import styled from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';

function FriendList ({friends}) {
    return (
        <ul className={styled.friend__list}>
            <FriendListItem />
        </ul>
    );
}

export default FriendList;