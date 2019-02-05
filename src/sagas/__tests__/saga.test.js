import getCurrencyNamesSaga from '../sagas';

test('TEsting Saga', () => {
  const res = getCurrencyNamesSaga();
  console.log(res.next());
});
