/**
 * Interface for the 'SensorValues' data
 */
export interface SensorValuesEntity {
  id: string | number; // Primary ID
  module: string;
  sensor: string;
  type: string;
  value: any;
  date: Date;
}
