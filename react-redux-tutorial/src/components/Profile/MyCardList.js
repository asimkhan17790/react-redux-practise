import React from 'react';
import MyCard from './MyCard'
export default function CardList(props) {
     const userList = props.userList;
     return (<div>
        {userList.map(profile => <MyCard key={profile.id} {...profile}/>)}
     </div>);
}
