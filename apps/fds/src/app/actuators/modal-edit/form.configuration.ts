import { FormConfiguration } from '@fds/form';

export const configuration: FormConfiguration  =  {
  controls: {
    save: {
      text: 'Save'
    }
  },
  fields: [
    {
      name: 'device',
      title: 'Device',
      dataType: 'text',
      disabled: true,
      validators: [],
    },
    {
      name: 'name',
      title: 'Actuator',
      dataType: 'text',
      disabled: true,
      validators: [],
    },
    {
      name: 'type',
      title: 'Type',
      dataType: 'text',
      disabled: true,
      validators: [],
    },
    {
      name: 'value',
      title: 'Value',
      dataType: 'text',
      validators: [{ validator: 'required' }],
    }
  ]
};
