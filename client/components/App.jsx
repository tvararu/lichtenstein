App = React.createClass({ // eslint-disable-line
  mixins: [ReactMeteorData],

  getMeteorData () {
    return {
      tasks: []
    }
  },

  render () {
    return <div>
      <h1>Hello world!</h1>
    </div>
  }
})
