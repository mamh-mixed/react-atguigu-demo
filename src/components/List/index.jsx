import React from 'react'
import PubSub from 'pubsub-js'

export default class List extends React.Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: '',
    }


    componentDidMount() {
        this.token = PubSub.subscribe('ailala', (_, data) => {
            this.setState(data)
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }


    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div className="row"> {
                isFirst ? <h2> please input to search</h2> : isLoading ?
                    <h2>loading.....</h2> : err ? <h2>error...... {err}</h2> :
                        users.map((userObj) => {
                            return (
                                <div key={userObj.id} className="card">
                                    <a href={userObj.html_url} target="_blank"
                                       rel="noreferrer">
                                        <img src={userObj.avatar_url}
                                             style={{width: '100px'}} alt=""/>
                                    </a>
                                    <p className="card-text">{userObj.login}</p>
                                </div>
                            )
                        })
            }
            </div>
        )
    }


}




