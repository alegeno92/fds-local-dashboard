
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
  }
];
