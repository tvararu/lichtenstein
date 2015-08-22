/* global mui */

const {
  List,
  ListItem,
  ListDivider
} = mui

LightList = React.createClass({ // eslint-disable-line
  propTypes: {
    lights: React.PropTypes.array.isRequired
  },

  render () {
    return <List>{
      this.props.lights.map((light, index) => {
        console.log(light)
        return [
          <ListItem key={ light._id }
            primaryText={ 'Light ' + (index + 1) }
            secondaryText={ 'Secondary Text' }
          />,
          <ListDivider />
        ]
      })
    }</List>
  }
})