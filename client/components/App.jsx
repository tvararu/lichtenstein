/* global mui */
/* global Lights */
/* global LightList */

const ThemeManager = new mui.Styles.ThemeManager()

App = React.createClass({ // eslint-disable-line
  mixins: [ReactMeteorData],

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  },

  getMeteorData () {
    return {
      lights: Lights.find().fetch()
    }
  },

  onLightToggle (id, toggled) {
    Lights.update(id, { '$set': { 'state.on': toggled } })
  },

  render () {
    return <div className='outer'>
      <h1 className='title'>Lichtenstein</h1>
      <LightList
        lights={ this.data.lights }
        onLightToggle={ this.onLightToggle }
      />
    </div>
  }
})
