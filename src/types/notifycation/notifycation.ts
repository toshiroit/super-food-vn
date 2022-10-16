export type NotifyCationForm = {
  show: 'show' | 'hide' | null;
  type?: 'danger' | 'warning' | 'success' | null;
  message?: string;
}
