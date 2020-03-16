export const ChangeStatusFilter = {
  selector: 'changeStatus',
  filterFn: function () {
    return function (data) {
      return data.filter(item => { return (item.change && item.value) });
    }
  }
};