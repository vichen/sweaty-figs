import React, { Component, PropTypes } from 'react'

export default class PlanBuilderItem extends Component {
  render() {
    const { activity } = this.props

    return (
      <div
        style={{ marginBottom: 20,
                borderStyle: "solid",
                borderWidth: "2px" }}>
        <div> {activity.title} - {activity.desc} {activity.location } </div>

        <button
          onClick={this.props.onDeleteFromBuilderClicked}>
          Delete
        </button>
      </div>
    )
  }
}

PlanBuilderItem.propTypes = {
  activity: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    // categories: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
    added: PropTypes.bool.isRequired
  }).isRequired,
  onDeleteFromBuilderClicked: PropTypes.func.isRequired
}