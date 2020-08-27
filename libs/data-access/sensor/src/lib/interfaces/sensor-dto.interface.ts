export interface SensorDto {
  type: string;
  name: string;
  username: string;
  password: string;
  authType: string;
  internalIp: string;
  externalIp: string;
  sshPort: number;
  cpu: string;
  ram: string;
  storage: string;
  notes: string;
  keyFile: string;
  adminEmail: string;
  user: any; //TODO change to the right one

}
