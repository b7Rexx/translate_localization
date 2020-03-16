export const TestComponent = {
  selector: 'test',
  template: `<div class="btn-group">
  <label class="btn btn-primary" ng-model="radioModel" btn-radio="'Left'">Left</label>
  <label class="btn btn-primary" ng-model="radioModel" btn-radio="'Middle'">Middle</label>
  <label class="btn btn-primary" ng-model="radioModel" btn-radio="'Right'">Right</label>
</div>`,
  controller: TestController
};

class TestController {

}
