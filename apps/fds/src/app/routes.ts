
export interface RouteItem {
  path: string;
  title: string;
  showOnMenu: boolean;
}

export const routes: RouteItem[] = [
  {
    path: 'dashboard',
    title: ' Dashboard',
    showOnMenu: true
  },
  {
    path: 'sensors',
    title: 'Sensors',
    showOnMenu: true
  },
  {
    path: 'actuators',
    title: 'Actuators',
    showOnMenu: true
  },
  {
    path: 'configurations',
    title: 'Configurations',
    showOnMenu: true
  },
  {
    path: 'exports',
    title: 'Exports',
    showOnMenu: true
  }
];
