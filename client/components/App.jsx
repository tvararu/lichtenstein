/* global Lights */

App = React.createClass({ // eslint-disable-line
  mixins: [ReactMeteorData],

  getMeteorData () {
    return {
      lights: Lights.find().fetch()
    }
  },

  render () {
    return <div>
      <div>{ JSON.stringify(this.data.lights) }</div>
    </div>
  }
})
