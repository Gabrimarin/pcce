import Dexie from 'dexie';

export const db = new Dexie('data');
db.version(4).stores({
  reports: '++id, officeNumber, agency, startDate, delegate, policeStation, file, origin',
});
