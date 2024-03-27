import Swal from 'sweetalert2';

export function showReport(){
  Swal.fire({
    title: 'Report Inappropriate Content',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Reported!',
        'Your report will be handled confidentially',
        'success'
      )
    }
  })
}