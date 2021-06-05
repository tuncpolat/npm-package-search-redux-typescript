import { ActionType } from "../action-types"
import { Action } from "../actions"

interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (state: RepoState = initialState, action: Action): RepoState => {
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_REPO_SUCCESS:
      // ts is 100% certain that 'action' is SearchRepoSuccessAction
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_REPO_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer