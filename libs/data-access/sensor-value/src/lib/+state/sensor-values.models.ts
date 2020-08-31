/**
 * Interface for the 'SensorValues' data
 */
export interface SensorValuesEntity {
  id: string | number; // Primary ID
  device: string;
  sensor: string;
  value_type: any;
  value: any;
  date: Date;
}
