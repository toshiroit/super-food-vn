import { NotifyCationForm } from "@/types/notifycation/notifycation";

const NotifycationForm = ({ show, message }: NotifyCationForm) => {
  return (
    <div className={`notifyFixed ${show === 'hide' ? 'hideNotifyFixed' : show === 'show' ? 'showNotifyFixed' : 'hideNotifyFixed'}`}>
      <div className="notifyFixed__inner">
        <h4 className="title">Thông báo</h4>
        <p className="text">{message}</p>
      </div>
    </div>
  )
}
export default NotifycationForm;
