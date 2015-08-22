/* global Lights */

App = React.createClass({ // eslint-disable-line
  mixins: [ReactMeteorData],

  getMeteorData () {
    return {
      lights: Lights.find().fetch()
    }
  },

  renderLights () {
    return this.data.lights.map((light, index) => {
      return <div key={ light._id }>
        <strong>Light { index }</strong>
        <ul>
          { Object.keys(light.state).map((key) => {
            return <li key={ light._id + key }>{ key }: { light.state[key].toString() }</li>
          }) }
        </ul>
      </div>
    })
  },

  render () {
    return <div>
      <div>{ this.renderLights() }</div>
    </div>
  }
})
