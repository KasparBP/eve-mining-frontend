import React from "react";
import PropTypes from 'prop-types'
import {Box} from "@material-ui/core";

class CharacterBox extends React.Component {

    render() {
        const info = this.props.info;
        return (
            <Box>
                <img src={info.portrait.px128} alt="Character portrait"/>
            </Box>
        );
    }
}

CharacterBox.propTypes = {
    info: PropTypes.object.isRequired
};

export default CharacterBox;