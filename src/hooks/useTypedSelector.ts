// code stuff so that react knows about the redux store types - see docs react-redux
import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../state'

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;