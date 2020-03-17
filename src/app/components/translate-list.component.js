class TranslateListController {
}

var translateListTemplate =
  `<div class="translate-list">
<table class="table table-responsive table-hover">
  <thead>
    <tr>
      <th class="text-center" width="5%">SN</th>
      <th width="45%">English</th>
      <th width="40%">Japanese</th>
      <th class="text-center" width="10%">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr ng-repeat="(index,item) in (filteredItems = ($ctrl.normalizedList | changeStatus|orderBy:'output'))">
      <td width="5%" class="text-center">{{index+1}}</td>
      <td width="45%">{{item.value}}</td>
      <td width="40%"><input ng-model="item.output" class="table-input form-control"/></td>
      <td width="10%" class="text-center">
      <i class="fa fa-check-circle text-success" ng-if="item.output"></i>
      <i class="fa fa-times-circle text-warning" ng-if="!item.output"></i>
      </td>
    </tr>
    <tr ng-show="filteredItems.length === 0">
      <td colspan="2">No item available for translation !! upload english json file !!</td>
    </tr>
  </tbody>
</table>
</div>`;

export const TranslateListComponent = {
  selector: 'translateList',
  bindings: {
    normalizedList: '<'
  },
  template: translateListTemplate,
  controller: TranslateListController
};
