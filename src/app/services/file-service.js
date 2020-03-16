export const FileService = {
  selector: 'fileService',
  service: class
    FileService {
    constructor(jsonService) {
      'ngInject';
      this.jsonService = jsonService;
    }

    /**
     * download file with data 
     * @param {*} data 
     * @param {*} filename 
     * @param {*} type 
     */
    download(data, filename, type) {
      var file = new Blob([data], { type: type });
      if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
      else { // Others
        var a = document.createElement("a"),
          url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }, 0);
      }
    }

    /**
     * read file
     * @param {*} element | input element with type file 
     */
    fileReader(element) {
      var that = this;
      return new Promise((res, rej) => {
        var reader = new FileReader();
        reader.onload = function (e) {
          let { status, data } = that.jsonService.decodeBase64toJson(e.target.result);
          console.log(data);
          if (status) {
            res(Object.assign([], that.jsonService.noramlizeJson(data)));
          } else {
            rej('Json parse failed');
          }
        };
        reader.readAsText(element.files[0]);
      });
    }
  }
};
