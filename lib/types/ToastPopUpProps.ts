export type ToastPopUpProps = {
    title: string;
    message?: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    type: 'success' | 'error' | 'info' | 'warning';
};
