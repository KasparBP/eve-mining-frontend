import React from "react";

class Home extends React.Component {

    componentDidMount() {
        fetch("http://localhost:8080/user", {"method": "GET", "credentials": "include"})
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Scratch</h1>

                </div>
            </div>
        );
    }
}
export default Home;