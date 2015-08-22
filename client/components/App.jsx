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

  render () {
    return <div className='outer'>
      <h1 className='title'>Lichtenstein</h1>
      <LightList lights={ this.data.lights } />
    </div>
  }
})
