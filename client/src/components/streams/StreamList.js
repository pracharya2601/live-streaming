import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import stream from '../../api/stream';


class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
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
        console.log(this.props.streams);
        return(
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {streams: Object.values(state.streams)}; // turn all the values of an object into an array
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);