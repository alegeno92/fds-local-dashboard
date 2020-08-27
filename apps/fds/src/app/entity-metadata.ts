import { environment } from '../environments/environment';

export const defaultDataServiceConfig = {
  root: '',
  entityHttpResourceUrls: {
    'Sensor': {
      collectionResourceUrl: `${environment['BASE_URL']}/sensors/`,
      entityResourceUrl: `${environment['BASE_URL']}/sensors/`
    }
  }
};
