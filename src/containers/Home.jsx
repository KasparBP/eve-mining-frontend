import React from "react";
import CharacterBox from "./CharacterBox";

class Home extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <h1>Scratch</h1>
                    <CharacterBox />
                </div>
            </div>
        );
    }
}
export default Home;