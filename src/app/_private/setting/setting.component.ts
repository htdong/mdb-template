import { Component, OnInit, OnDestroy } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { GlobalState } from '../../global.state';
import { LocalStorageService } from '../../_system/services/localStorage.service';
import { NavigationService } from '../../_system/services/navigation.service';
import { MenuService } from '../../_system/services/menu.service';

import { BaseComponent } from '../../_system/_base/base.component';

import { AppDoubleNavLayoutComponent } from '../../_system/_layouts/doubleNavsLayout.component';

@Component({
  templateUrl: 'setting.html',
  styleUrls: [ 'setting.scss' ]
})
export class SettingComponent extends BaseComponent implements OnInit, OnDestroy {

  myScope = 'setting';

  // Override Base class properties
  pageTitle = 'setting';

  sidebarMenuJSONFile = '';

  globalConfig = {
    language: true,
    trackHistory: true
  };

  helpFile = 'home';

  // Derive class properties
  menu: any[];

  favTopPosition: boolean;

  constructor(
    // Base class services
    public translateService: TranslateService,
    public globalState: GlobalState,
    public localStorageService: LocalStorageService,
    public navigationService: NavigationService,
    public menuService: MenuService,

    // Derive class services
    public app: AppDoubleNavLayoutComponent
  ) {
    // Base class constructor: Re-injection for inheritance
    super(translateService, globalState, localStorageService, menuService, navigationService);

    // Derive class constructor
  }

  ngOnInit() {
    /* Base class initialization */
    super.ngOnInit();
    this.subscribeGlobalState();

    /* Derive class initialization */

    // Initialize sidebar menu
    this.initSidebarMenu();

    // Initialize help modal content
    this.globalState.notifyMyDataChanged('help', '', this.helpFile);

    // const element = document.getElementsByTagName('body')[0];
    // element.classList.add('landing-body');

    // Reinstate user preference
    this.favTopPosition = this.localStorageService.getFavPosition();

    // // Refresh sidebar menu to update Fav menu position
    this.menu = this.initMenu();
    this.refreshSidebarMenu();
  }

  ngOnDestroy() {
    /* Base class destroy */
    super.ngOnDestroy();

    // const element = document.getElementsByTagName('body')[0];
    // element.classList.remove('landing-body');
  }

  /**
   *  [COMPONENT FUNCTIONS]
   * @function changeLanguage
   */

  initMenu() {
    return [
      { data: { label: 'back_to_home', icon: 'home', url: '/home' } },
      {
        data: { label: 'menu_modes', icon: 'th' },
        children: [
          { data: { label: 'static_menu', icon: 'list', command: (event) => this.app.setStaticMode() }},
          { data: { label: 'overlay_menu', icon: 'bars', command: (event) => this.app.setOverlayMode() }}
        ]
      },
      {
        data: { label: 'themes', icon: 'paint-brush' },
        children: [
          { data: { label: 'white', icon: 'tint', command: (event) => this.app.changeSkin('white-skin') }},
          { data: { label: 'black', icon: 'tint', command: (event) => this.app.changeSkin('black-skin') }},
          { data: { label: 'cyan', icon: 'tint', command: (event) => this.app.changeSkin('cyan-skin') }},
          { data: { label: 'mdb', icon: 'tint', command: (event) => this.app.changeSkin('mdb-skin') }},
          { data: { label: 'deep_purple', icon: 'tint', command: (event) => this.app.changeSkin('deep-purple-skin') }},
          { data: { label: 'navy_blue', icon: 'tint', command: (event) => this.app.changeSkin('navy-blue-skin') }},
          { data: { label: 'pink', icon: 'tint', command: (event) => this.app.changeSkin('pink-skin') }},
          { data: { label: 'indigo', icon: 'tint', command: (event) => this.app.changeSkin('indigo-skin') }},
          { data: { label: 'light_blue', icon: 'tint', command: (event) => this.app.changeSkin('light-blue-skin') }},
          { data: { label: 'grey', icon: 'tint', command: (event) => this.app.changeSkin('grey-skin') }},
        ]
      },
    ];
  }

  refreshSidebarMenu(toggle: boolean = false) {
    const fav = this.localStorageService.getFav();
    const currentPosition = this.localStorageService.getFavPosition();
    this.favTopPosition = toggle ? !currentPosition : currentPosition;
    // console.log(this.favTopPosition);

    if (this.favTopPosition) {
      fav.push(...this.menu);
      console.log(fav);
      this.globalState.notifyMyDataChanged('sidebarMenu', '', fav);
    } else {
      const changedMenu = [...this.menu, ...fav];
      console.log(changedMenu);
      this.globalState.notifyMyDataChanged('sidebarMenu', '', changedMenu);
    }

    this.localStorageService.setFavPosition(this.favTopPosition);
  }
  
  public changeLanguage(lang: string) {
    this.localStorageService.setLang(lang);
    this.translateService.use(lang);
  }

  showSuccess() {
    const data = {
      type: 'success',
      message: 'Messages',
      title: 'Info'
    };

    this.globalState.notifyMyDataChanged('toast', '', data);
  }

  showError() {
    const data = {
      type: 'error',
      message: 'Messages',
      title: 'Info'
    };

    this.globalState.notifyMyDataChanged('toast', '', data);
  }

}
