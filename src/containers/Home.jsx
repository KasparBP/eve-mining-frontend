import React from "react";
import { connect } from 'react-redux';
import CharacterBox from "./CharacterBox";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    { (this.props.character === undefined) ? <span/> :
                        <CharacterBox info={this.props.character}/>
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = function(store) {
    return {
        character: store.characterInfo.info
    };
};
export default connect(mapStateToProps)(Home);