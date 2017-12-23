import test from 'ava';
import upper from './uppercase';

test('Converts a string to uppercase', t => {
  const value = upper('str');
	t.is(value, 'STR');
});