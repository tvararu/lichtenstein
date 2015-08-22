/* global mui */
/* global Lights */
/* global LightList */

const {
  RaisedButton
} = mui

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
    return <div>
      <RaisedButton label='Sup' primary={ true } />
      <LightList lights={ this.data.lights } />
    </div>
  }
})
