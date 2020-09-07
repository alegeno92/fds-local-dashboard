
export declare type  DataType = 'text' | 'textarea' | 'enum' | 'number' | 'dateTime' | 'dropdown' | 'dropdown-static' | 'bool' | 'image';
export declare type  ValidatorType = 'required' | 'email' | 'password';

export interface FormConfiguration {
  controls?: {
    save: {
      text: string
    }
  },
  disabled?: boolean;
  fields:
    {
      name?: string,
      title?: string,
      validators?: { validator: ValidatorType, [key: string]: string }[],
      dataType?: DataType,
      default?: any,
      values?: any,
      store?: any,
      key?: string;
      text?: string;
      valuePrimitive?: boolean;
      disabled?: boolean;
    }[]
}
