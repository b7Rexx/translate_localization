class HomeController {
  constructor($scope, jsonService, fileService) {
    var that = this;
    this.jsonService = jsonService;
    this.fileService = fileService;
    
    /**
     * english file input handler
     */
    $scope.englishFileChangeHandler = (element) => {
      this.loader = true;
      $scope.$apply();

      this.fileService.fileReader(element).then(res => {
        that.englishList = res;
        that.downloadBtn = false;
        that.updateJapanese();
        $scope.$apply();
      }).catch(() => {
        this.loader = false;
        $scope.$apply();
      });
    };
       
    /**
     * japanese file input handler
     */
    $scope.japaneseFileChangeHandler = (element) => {
      this.loader = true;
      $scope.$apply();
      this.fileService.fileReader(element).then(res => {
        that.japaneseList = res;
        that.updateJapanese();
        $scope.$apply();
      }).catch(() => {
        this.loader = false;
        $scope.$apply();
      });
    };
  }

  $onInit() {
    this.downloadBtn = true;
    this.loader = false;
    this.englishList = [];
    this.japaneseList = [];
  }

  updateJapanese() {
    var normalizedJapaneseData = this.japaneseList.filter(item => { return item.change });
    this.englishList.filter(item => {
      if (item.change) {
        var matchKey = normalizedJapaneseData.find(item1 => {
          return (item1.nestedKey === item.nestedKey);
        });
        if (matchKey)
          item.output = matchKey.value;
      }
    });
    this.loader = false;
  }

  downloadFile() {
    var downloadJson = this.jsonService.revertNormalizeJson(this.englishList);
    this.fileService.download(JSON.stringify(downloadJson), 'output.json', 'txt');
  }
}

var homeTemplate =
  `<div class="container">
  <div class="text-center"><h3>Translate Localized Json</h3></div>
  <div ng-show="$ctrl.loader" class="loading"></div>
  <div ng-hide="$ctrl.loader">
  <div class="row justify-content-center mt-2 mb-4">
    <div class="col-md-6">
    <label for="input-file">Load English File</label>
    <input type="file" id="input-file" class="form-control" 
    onchange="angular.element(this).scope().englishFileChangeHandler(this)"/>
    </div>
    <div class="col-md-6">
    <label for="output-file">Load Japanese File</label>
    <input type="file" id="output-file" class="form-control"
    onchange="angular.element(this).scope().japaneseFileChangeHandler(this)" />
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
    <translate-list normalized-list="$ctrl.englishList"></translate-list> 
    <div class="text-center">
    <button class="btn btn-sm btn-outline-primary" ng-disabled="$ctrl.downloadBtn" ng-click="$ctrl.downloadFile()">
    <i class="fa fa-download"> Download Japanese Json File </i>
    </button>  
    </div>
    </div>
    </div>
    </div>
</div>`;

export const HomeComponent = {
  selector: 'home',
  template: homeTemplate,
  controller: HomeController
};
