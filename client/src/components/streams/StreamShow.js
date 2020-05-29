import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';


class StreamShow extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchStream(id);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        if (this.player || !this.props.stream) {
            return;
        }

        const {id} = this.props.match.params;
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
        this.player.play();
    }

    render() {
        if(!this.props.stream) {
            return (
                <div class="ui segment">
                <div class="ui active dimmer">
                    <div class="ui massive text loader">Loading..</div>
                </div>
                    <div style={{height: '50vh'}}></div>
                </div>
            )
        }
        const {title, description} = this.props.stream
        return (
            <div>
                <video ref={this.videoRef} style={{width: '100%'}} controls />
                <h1>{title}</h1>
                <h4>{description}</h4>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        stream : state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream}) (StreamShow);