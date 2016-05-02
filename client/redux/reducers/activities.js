import { combineReducers } from 'redux'
import { RECEIVE_ACTIVITIES, ADD_TO_BUILDER } from '../constants/ActionTypes'

function activities(state, action) {
  switch (action.type) {
    case ADD_TO_BUILDER:
      return Object.assign({}, state, {
        added: true
      })
    default:
      return state
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ACTIVITIES:
      return Object.assign({},
        state,
        action.activities.reduce((obj, activity) => {
          obj[activities.id] = activity
          return obj
        }, {})
      )
    default:
      const { activityId } = action
      if (activityId) {
        return Object.assign({}, state, {
          [activityId]: activities(state[activityId], action)
        })
      }
      return state
  }
}

function visibleIds(state = [], action) {
  switch (action.type) {
    case RECEIVE_ACTIVITIES:
      return action.activities.map(activity => activity.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export function getActivity(state, id) {
  return state.byId[id]
}

export function getVisibleActivities(state) {
  return state.visibleIds.map(id => getActivity(state, id))
}