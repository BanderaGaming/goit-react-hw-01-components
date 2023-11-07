import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList ({friends}){
    return <ul className={css.friendList}>
        {friends.map((item) => {
            return <FriendListItem friend={item} key={item.id} />
        })}
</ul>
}