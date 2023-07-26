import { 
    TypedUseSelectorHook, 
    useDispatch, 
    useSelector 
} from 'react-redux';
import type { AppDispatch, RootState } from '../store';
export const useAppDispatch = () => useDispatch<AppDispatch>()
//selector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//selectors
export const userSelector = (state: RootState) => state.user;