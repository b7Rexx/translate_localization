class HomeController {
  constructor($scope, jsonService, fileService, swalService, IGNORE_STRING) {
    'ngInject';
    var that = this;
    this.jsonService = jsonService;
    this.fileService = fileService;
    this.swalService = swalService;
    this.IGNORE_STRING = IGNORE_STRING || '';
    this.ignoreString = IGNORE_STRING || '';
    /**
     * english file input handler
     */
    $scope.englishFileChangeHandler = (element) => {
      this.loader = true;
      $scope.$apply();

      this.fileService.fileReader(element, that.IGNORE_STRING).then(res => {
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
      this.fileService.fileReader(element, that.IGNORE_STRING).then(res => {
        that.japaneseList = res;
        that.updateJapanese();
        $scope.$apply();
      }).catch(() => {
        this.loader = false;
        $scope.$apply();
      });
    };

    /**
     * change ingore string input handler with alert
     */
    $scope.changeIgnoreStringHandler = (element) => {
      that.swalService.confirm('Are you sure ?', 'This will reset your progress!')
        .then(result => {
          if (result.value) {
            that.IGNORE_STRING = element.value;
            that.englishList = [];
            that.japaneseList = [];
            this.downloadBtn = true;
            $scope.$apply();
          } else {
            that.ignoreString = that.IGNORE_STRING;
            $scope.$apply();
          }
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
    var downloadJson = this.jsonService.revertNormalizeJson(this.englishList, this.IGNORE_STRING);
    this.fileService.download(JSON.stringify(downloadJson), 'output.json', 'txt');
  }

}

var homeTemplate =
  `<div class="container">
 <div class="text-center p-2">
   <h3>Translate Localized Json</h3>
 </div>
 <div class="content">
   <div ng-show="$ctrl.loader" class="loading"></div>
   <div ng-hide="$ctrl.loader">
   <div class="row justify-content-center">
  <div class="col-sm-6">
    <span>Ignore string starting with</span>
    <input type="text" class=" col-sm-4 form-control d-inline" ng-value="$ctrl.ignoreString" 
    onchange="angular.element(this).scope().changeIgnoreStringHandler(this)" />
  </div>
</div>
     <div class="row justify-content-center mt-2 mb-4">
       <div class="col-sm-6 col-md-2">
         <label for="input-file">English Json File</label>
         <div class="mt-1 single-line-word d-inline">
           <span class="text-green" ng-show="$ctrl.englishList.length > 0">
             <i class="fa fa-check"></i> {{$ctrl.englishList.length}}
           </span>
           <span class="text-danger" ng-show="$ctrl.englishList.length === 0">
             <i class="fa fa-asterisk"></i>
           </span>
         </div>

       </div>
       <div class="col-sm-6 col-md-3 mb-2">
         <input type="file" id="input-file" class="form-control"
           onchange="angular.element(this).scope().englishFileChangeHandler(this)" />
       </div>
      <div class="col-md-2"></div> 
       <div class="col-sm-6 col-md-2">
         <label for="output-file">Japanese Json File</label>
         <div class="mt-1 single-line-word d-inline">
           <span class="text-green" ng-show="$ctrl.japaneseList.length > 0">
             <i class="fa fa-check"></i> {{$ctrl.japaneseList.length}}
           </span>
         </div>
       </div>
       <div class="col-sm-6 col-md-3 mb-2">
         <input type="file" id="output-file" class="form-control"
           onchange="angular.element(this).scope().japaneseFileChangeHandler(this)" />
       </div>
     </div>
     <div class="row">
       <div class="col-sm-12">
         <translate-list normalized-list="$ctrl.englishList"></translate-list>
         <div class="text-center">
           <button class="btn btn-outline-primary" ng-disabled="$ctrl.downloadBtn" ng-click="$ctrl.downloadFile()">
             <i class="fa fa-download"> Download Japanese Json File </i>
           </button>
         </div>
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
