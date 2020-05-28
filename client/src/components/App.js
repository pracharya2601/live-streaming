import React from 'react';
import { Router, Route} from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from "./Header";
import history from '../history';


const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/stream/new" exact component={StreamCreate} />
                    <Route path="/stream/edit/:id/:userId" exact component={StreamEdit} />
                    <Route path="/stream/delete/:id/:userId" exact component={StreamDelete} />
                    <Route path="/stream/show" exact component={StreamShow} />
                </div>
            </Router>
            
        </div>
    )
};

export default App;