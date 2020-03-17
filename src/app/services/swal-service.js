export const SwalService = {
  selector: 'swalService',
  service: class
    SwalService {
    constructor(Swal) {
      'ngInject';
      this.Swal = Swal;
    }

    confirm(title, detail) {
      return this.Swal.fire({
        title: title,
        text: detail,
        icon: 'warning',
        showCancelButton: true,
      });
    }
  }
};
