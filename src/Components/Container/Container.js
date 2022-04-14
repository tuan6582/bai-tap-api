import React, { useEffect, useState } from 'react';




function Container() {

    const [isShow, setIsShow] = useState(false)

    const [action, setAction] = useState(false)

    const [use, setUse] = useState([])

    useEffect(() => {

        const api = 'https://jsonplaceholder.typicode.com/users/1?fbclid=IwAR0R-eH2Xjx3y7Uvhh0eRyDjCv7QZ2b0oB2dUdWKq7FQpzWhUfxhCBQmgyg';

        const getApi = (user) => {
            fetch(api)
                .then((reponse) => reponse.json())
                .then((user) => {
                    setUse(user)
                })
        }

        getApi()

    }, [])

    const handleShow = () => {
        setIsShow(true)
    }

    const handleAction = () => {
        setAction(true)
    }

    return (
        <div>
            <div>
                <button onClick={handleShow}>
                    Show User
                </button>
                {isShow ? <h3 onClick={handleAction}>Name: {use.name}</h3> : undefined}
            </div>

            {action ? <div>
                <ul>
                    <li>Email: {use.email}</li>
                    <li>Phone: {use.phone}</li>
                    <li>Username: {use.username}</li>
                    <li>Website: {use.website}</li>
                    <li>City: {use.address.city}</li>
                    <li>Lat: {use.address.geo.lat}</li>
                    <li>Lng: {use.address.geo.lng}</li>
                    <li>Street: {use.address.street}</li>
                    <li>Suite: {use.address.suite}</li>
                    <li>Zipcode: {use.address.zipcode}</li>
                    <li>Bs: {use.company.bs}</li>
                    <li>CatchPhrase: {use.company.catchPhrase}</li>
                    <li>Name: {use.company.name}</li>
                </ul>
            </div> :
                undefined}
        </div>
    );
}

export default Container;