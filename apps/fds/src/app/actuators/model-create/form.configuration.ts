import { FormConfiguration } from '@fds/form';

export const configuration: FormConfiguration = {
  controls: {
    save: {
      text: 'Save'
    }
  },
  fields: [
    {
      name: 'module',
      title: 'Module',
      dataType: 'text',
      validators: [{ validator: 'required' }]
    },
    {
      name: 'actuator',
      title: 'Actuator',
      dataType: 'text',
      validators: [{ validator: 'required' }]
    },
    {
      name: 'type',
      title: 'Value Type',
      dataType: 'dropdown-static',
      values: [
        {
          key: 'integer',
          value: 'Integer'
        },
        {
          key: 'float',
          value: 'Float'
        },
        {
          key: 'string',
          value: 'String'
        }
      ],
      validators: [{ validator: 'required' }]
    },
    {
      name: 'value',
      title: 'Value',
      dataType: 'text',
      validators: [{ validator: 'required' }]
    },
    {
      name: 'emitValue',
      title: 'Emit Value',
      dataType: 'bool',
      default: false,
      validators: []
    }
  ]
};
