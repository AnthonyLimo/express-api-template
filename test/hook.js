import {
  dropTables,
  createTables,
  insertIntoTables
// eslint-disable-next-line import/named
} from '../src/utils/queryFunctions';

before(async () => {
  await createTables();
  await insertIntoTables();
});

after(async () => {
  await dropTables();
});
