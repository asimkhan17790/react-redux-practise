import React from 'react';
//import { withRouter } from 'react-router-dom';
import '../../App.css';
import MyCardList from './MyCardList';
import MyForm from './MyForm';

/*const testData = [{"login": "mojombo",
                   "id": 1,
                   "node_id": "MDQ6VXNlcjE=",
                   "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
                   "gravatar_id": "",
                   "url": "https://api.github.com/users/mojombo",
                   "html_url": "https://github.com/mojombo",
                   "followers_url": "https://api.github.com/users/mojombo/followers",
                   "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
                   "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
                   "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
                   "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
                   "organizations_url": "https://api.github.com/users/mojombo/orgs",
                   "repos_url": "https://api.github.com/users/mojombo/repos",
                   "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
                   "received_events_url": "https://api.github.com/users/mojombo/received_events",
                   "type": "User",
                   "site_admin": false,
                   "name": "Tom Preston-Werner",
                   "company": null,
                   "blog": "http://tom.preston-werner.com",
                   "location": "San Francisco",
                   "email": null,
                   "hireable": null,
                   "bio": null,
                   "twitter_username": null,
                   "public_repos": 62,
                   "public_gists": 62,
                   "followers": 22082,
                   "following": 11,
                   "created_at": "2007-10-20T05:24:19Z",
                   "updated_at": "2020-08-18T23:22:41Z"},{"login": "asimkhan17790",
                                                          "id": 13054443,
                                                          "node_id": "MDQ6VXNlcjEzMDU0NDQz",
                                                          "avatar_url": "https://avatars2.githubusercontent.com/u/13054443?v=4",
                                                          "gravatar_id": "",
                                                          "url": "https://api.github.com/users/asimkhan17790",
                                                          "html_url": "https://github.com/asimkhan17790",
                                                          "followers_url": "https://api.github.com/users/asimkhan17790/followers",
                                                          "following_url": "https://api.github.com/users/asimkhan17790/following{/other_user}",
                                                          "gists_url": "https://api.github.com/users/asimkhan17790/gists{/gist_id}",
                                                          "starred_url": "https://api.github.com/users/asimkhan17790/starred{/owner}{/repo}",
                                                          "subscriptions_url": "https://api.github.com/users/asimkhan17790/subscriptions",
                                                          "organizations_url": "https://api.github.com/users/asimkhan17790/orgs",
                                                          "repos_url": "https://api.github.com/users/asimkhan17790/repos",
                                                          "events_url": "https://api.github.com/users/asimkhan17790/events{/privacy}",
                                                          "received_events_url": "https://api.github.com/users/asimkhan17790/received_events",
                                                          "type": "User",
                                                          "site_admin": false,
                                                          "name": "Asim Khan",
                                                          "company": null,
                                                          "blog": "",
                                                          "location": "Palo Alto, California",
                                                          "email": null,
                                                          "hireable": null,
                                                          "bio": null,
                                                          "twitter_username": null,
                                                          "public_repos": 17,
                                                          "public_gists": 0,
                                                          "followers": 3,
                                                          "following": 2,
                                                          "created_at": "2015-06-25T19:24:22Z",
                                                          "updated_at": "2020-08-25T01:39:50Z"},{"login": "gaearon",
                                                                                                 "id": 810438,
                                                                                                 "node_id": "MDQ6VXNlcjgxMDQzOA==",
                                                                                                 "avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
                                                                                                 "gravatar_id": "",
                                                                                                 "url": "https://api.github.com/users/gaearon",
                                                                                                 "html_url": "https://github.com/gaearon",
                                                                                                 "followers_url": "https://api.github.com/users/gaearon/followers",
                                                                                                 "following_url": "https://api.github.com/users/gaearon/following{/other_user}",
                                                                                                 "gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
                                                                                                 "starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
                                                                                                 "subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
                                                                                                 "organizations_url": "https://api.github.com/users/gaearon/orgs",
                                                                                                 "repos_url": "https://api.github.com/users/gaearon/repos",
                                                                                                 "events_url": "https://api.github.com/users/gaearon/events{/privacy}",
                                                                                                 "received_events_url": "https://api.github.com/users/gaearon/received_events",
                                                                                                 "type": "User",
                                                                                                 "site_admin": false,
                                                                                                 "name": "Dan Abramov",
                                                                                                 "company": "@facebook ",
                                                                                                 "blog": "http://twitter.com/dan_abramov",
                                                                                                 "location": null,
                                                                                                 "email": null,
                                                                                                 "hireable": null,
                                                                                                 "bio": "Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.",
                                                                                                 "twitter_username": null,
                                                                                                 "public_repos": 247,
                                                                                                 "public_gists": 71,
                                                                                                 "followers": 59606,
                                                                                                 "following": 171,
                                                                                                 "created_at": "2011-05-25T18:18:31Z",
                                                                                                 "updated_at": "2020-08-25T19:50:24Z"}];*/


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [],
        };
    }

    addNewProfile = (profileData) => {
        console.log(`App`, profileData);
        //imp
        this.setState(prevState => ({
        profiles:[...prevState.profiles, profileData],

        }));

    }
     render() {
     return (
     <div>
            <div className= "header">{this.props.title}
            </div>
            <MyForm onSubmit={this.addNewProfile}/>
            <MyCardList userList={this.state.profiles}/>
     </div>
          );
     }
}
export default Profile;
