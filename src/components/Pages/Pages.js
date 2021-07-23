import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import All_Users from '../All_Users/All_Users'
import Each_User from '../Each_User/Each_User'
import CreatePost from '../CreatePost/CreatePost'


export default function Pages() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Homepage} exact />
                    <Route path="/users" component={All_Users} exact />
                    <Route path="/users/:userid" component={Each_User} exact />
                    <Route path="/createpost/:postid" component={CreatePost} exact />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
