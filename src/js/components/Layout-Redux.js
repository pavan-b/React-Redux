import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"


//React component managed by Redux mapStateToProps and mapDispatchToProps

 class Layout extends React.Component {
  componentWillMount() {
    
    this.props.fetchU()
  }

  fetchTweets() {
    this.props.fetchT()
  }

  render() {
    const { user, tweets } = this.props;

    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    }

    const mappedTweets = tweets.map((tweet,index) => <li key={index} >{tweet.text}</li>)

    return <div>
      <h1>{user.name}</h1>
      <ul>{mappedTweets}</ul>
    </div>
  }
}



const mapStateToProps = (store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchU: () => {
      dispatch(fetchUser())
    },
    fetchT: () => {
      dispatch(fetchTweets())
    }

  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
export default VisibleTodoList
