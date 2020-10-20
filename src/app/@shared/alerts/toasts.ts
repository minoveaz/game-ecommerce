import Swal from 'sweetalert2';
import { TYPE_ALERT } from './values.config';


export function basicAlert(icon = TYPE_ALERT.SUCCESS, title: string = ''){
    Swal.fire({
        title,
        icon,
        position: 'top',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        toast: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
}
