import { login, logout } from '../../actions/auth';


test('should generate login action object', () => {
  const uid = 'abc123';
  const action = login({ id: '123abc' });
  expect(action).toEqual({
    type: 'LOGIN',
    id: '123abc'
  });
});

test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
      type: 'LOGOUT',
    });
  });