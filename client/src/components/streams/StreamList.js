import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';


class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId) {
            return(
                <div className="right floated content">

                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                            <i className="ellipsis vertical icon" />
                            <div className="menu">
                            <Link to={`/stream/edit/${stream.id}/${stream.userId}`} className="item">Edit</Link>
                            <Link to={`/stream/delete/${stream.id}/${stream.userId}`} className="item">Delete</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return(
                <div style={{textAlign: 'right'}}>
                    <Link to="/stream/new" className="ui button primary">Create Stream</Link>
                </div>
            )
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon video" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                <h2>Streams</h2>
                {this.renderCreate()}
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams), // convert all the values of an object into an array
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }; 
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);