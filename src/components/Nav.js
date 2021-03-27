import React from 'react';

export default class Navbar extends React.Component {

    async componentDidMount() {
        function getMarkers() {
            console.log("step 1");
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("step 2");
                    // resolve("yes done!");
                    reject("Im sorry")
                }, 3000)
            })
            return promise;
        }

        // getMarkers().then((data) => {
        //     console.log("step 3", data);
        // }).catch((err) => {
        //     console.log("step 4", err);
        // })


        try {
            const res = await getMarkers();
            // console.log("step 3", res);
        }
        catch (err) {
            // console.log("step 4", err)
        }
    }

    render() {
        return (
            <div>
                <h1>Nav bar</h1>
            </div>
        )
    }
}