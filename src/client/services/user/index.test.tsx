import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchUser } from './';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('async user actions', () => {
  it('creates FETCH_USER_SUCCESS when fetching user has been done', () => {
    const store = mockStore({ user: {} });
    let flag = false;
    return store.dispatch(fetchUser() as any).then(() => {
        store.getActions().forEach((el: any) => {
            if(el.type && el.type ==='user/fetchUser/fulfilled')
                flag = true;
        })
        expect(flag).toEqual(true);
    });
  });
});