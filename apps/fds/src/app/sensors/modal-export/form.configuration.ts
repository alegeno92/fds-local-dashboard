import { FormConfiguration } from '@fds/form';

export const configuration: FormConfiguration  =  {
  controls: {
    save: {
      text: 'Export'
    }
  },
  fields: [
    {
      name: 'clearTable',
      title: 'Clear Table',
      dataType: 'bool',
      validators: [{ validator: 'required' }],
      default: true
    }
  ]
};
