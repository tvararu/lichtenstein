/* global App */

Meteor.startup(() => {
  React.render(<App />, document.getElementById('render-target'))
})
