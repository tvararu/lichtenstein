/* global App */

Lights = new Mongo.Collection('lights') // eslint-disable-line

Meteor.startup(() => {
  React.render(<App />, document.getElementById('render-target'))
})
