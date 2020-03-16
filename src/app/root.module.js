import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import './root.component.scss';

// bootstrap
import { RootComponent } from './root.component';

// components
import { TestComponent } from './components/test.component';
import { HomeComponent } from './components/home.component';
import { TranslateListComponent } from './components/translate-list.component';

//filters 
import { ChangeStatusFilter } from './filters/change-status.filter';
//services
import { JsonService } from './services/json-service';
import { FileService } from './services/file-service';

angular
  .module('root', [uiRouter])
  .component(RootComponent.selector, RootComponent)

  // components
  .component(HomeComponent.selector, HomeComponent)
  .component(TestComponent.selector, TestComponent)
  .component(TranslateListComponent.selector, TranslateListComponent)

  // services
  .service(JsonService.selector, JsonService.service)
  .service(FileService.selector, FileService.service)

  .filter(ChangeStatusFilter.selector, ChangeStatusFilter.filterFn)
  // router
  .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state(TestComponent.selector, { url: `/${TestComponent.selector}`, component: TestComponent.selector })
      .state(HomeComponent.selector, { url: '/translate_localization/', component: HomeComponent.selector });

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/translate_localization/');
  });
