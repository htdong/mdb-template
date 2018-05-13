import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

import { GlobalState } from '../../global.state';
import { LocalStorageService } from '../../_system/services/localStorage.service';
import { NavigationService } from '../../_system/services/navigation.service';
import { MenuService } from '../../_system/services/menu.service';

import { BaseComponent } from '../../_system/_base/base.component';

import { AppDoubleNavLayoutComponent } from '../../_system/_layouts/doubleNavsLayout.component';

@Component({
  templateUrl: 'themes.html',
  styleUrls: [ 'themes.scss' ]
})
export class ThemesComponent extends BaseComponent implements OnInit, OnDestroy {

  myScope = 'theme';

  // Override Base class properties
  pageTitle = 'theme';

  sidebarMenuJSONFile = '';

  globalConfig = {
    language: true,
    trackHistory: true
  };

  // Derive class properties
  menu: any[];

  public form: FormGroup;

  toast: any;
  favTopPosition: boolean;
  card_colors = 'indigo';
  card_colors_ext = '';
  button_fill = 'btn';
  button_shape = '';
  debug: boolean;

  helpFile = 'home';

  constructor(
    // Base class services
    public translateService: TranslateService,
    public globalState: GlobalState,
    public localStorageService: LocalStorageService,
    public navigationService: NavigationService,
    public menuService: MenuService,

    // Derive class services
    public app: AppDoubleNavLayoutComponent,
    private fb: FormBuilder,
  ) {
    // Base class constructor: Re-injection for inheritance
    super(translateService, globalState, localStorageService, menuService, navigationService);

    // Derive class constructor

    // Reinstate user preference
    const env = this.localStorageService.getEnv();

    this.favTopPosition = this.localStorageService.getFavPosition();
    this.toast = env['pref']['toasty'];
    this.debug = env['pref']['debug'] || false;
    // // Refresh sidebar menu to update Fav menu position
    this.menu = this.initMenu();
    this.refreshSidebarMenu(false);

    this.form = fb.group({
      'title': ['', Validators.compose([Validators.required])],
      'message': ['', Validators.compose([Validators.required])],
      'type': ['', Validators.compose([Validators.required])],
      'position': [this.toast['position'], Validators.compose([Validators.required])],
      'timeOut': [this.toast['timeOut'], Validators.compose([Validators.required])],
      'extendedTimeOut': [this.toast['extendedTimeOut'], Validators.compose([Validators.required])],
      'closeButton': [this.toast['closeButton'], Validators.compose([Validators.required])],
      'progressBar': [this.toast['progressBar'], Validators.compose([Validators.required])],
      'tapToDismiss': [this.toast['tapToDismiss'], Validators.compose([Validators.required])]
    });    
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
  }

  ngOnDestroy() {
    /* Base class destroy */
    super.ngOnDestroy();

    // const element = document.getElementsByTagName('body')[0];
    // element.classList.remove('landing-body');
  }

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
      {
        data: { label: 'card_color', icon: 'square' },
        children: [
          { data: { label: 'red', icon: 'tint', command: (event) => this.change_card_colors('red') }},
          { data: { label: 'pink', icon: 'tint', command: (event) => this.change_card_colors('pink') }},
          { data: { label: 'purple', icon: 'tint', command: (event) => this.change_card_colors('purple') }},
          { data: { label: 'deep_purple', icon: 'tint', command: (event) => this.change_card_colors('deep-purple') }},
          { data: { label: 'indigo', icon: 'tint', command: (event) => this.change_card_colors('indigo') }},
          { data: { label: 'blue', icon: 'tint', command: (event) => this.change_card_colors('blue') }},
          { data: { label: 'light_blue', icon: 'tint', command: (event) => this.change_card_colors('light-blue') }},
          { data: { label: 'cyan', icon: 'tint', command: (event) => this.change_card_colors('cyan') }},
          { data: { label: 'teal', icon: 'tint', command: (event) => this.change_card_colors('teal') }},
          { data: { label: 'green', icon: 'tint', command: (event) => this.change_card_colors('green') }},
          { data: { label: 'light_green', icon: 'tint', command: (event) => this.change_card_colors('light-green') }},
          { data: { label: 'lime', icon: 'tint', command: (event) => this.change_card_colors('lime') }},
          { data: { label: 'yellow', icon: 'tint', command: (event) => this.change_card_colors('yellow') }},
          { data: { label: 'amber', icon: 'tint', command: (event) => this.change_card_colors('amber') }},
          { data: { label: 'orange', icon: 'tint', command: (event) => this.change_card_colors('orange') }},
          { data: { label: 'deep_orange', icon: 'tint', command: (event) => this.change_card_colors('deep-orange') }},
          { data: { label: 'brown', icon: 'tint', command: (event) => this.change_card_colors('brown') }},
          { data: { label: 'grey', icon: 'tint', command: (event) => this.change_card_colors('grey') }},
          { data: { label: 'blue_grey', icon: 'tint', command: (event) => this.change_card_colors('blue-grey') }},
          { data: { label: 'black', icon: 'tint', command: (event) => this.change_card_colors('black') }},
          { data: { label: 'mdb', icon: 'tint', command: (event) => this.change_card_colors('mdb-color') }},

          { data: { label: 'purple_gradient', icon: 'tint', command: (event) => this.change_card_colors('purple-gradient') }},
          { data: { label: 'peach_gradient', icon: 'tint', command: (event) => this.change_card_colors('peach-gradient') }},
          { data: { label: 'blue_gradient', icon: 'tint', command: (event) => this.change_card_colors('blue-gradient') }},
        ]
      },
      {
        data: { label: 'card_color_ext', icon: 'arrows-h' },
        children: [
          { data: { label: 'lighten_5', icon: 'tint', command: (event) => this.change_card_colors_ext('lighten-5') }},
          { data: { label: 'lighten_4', icon: 'tint', command: (event) => this.change_card_colors_ext('lighten-4') }},
          { data: { label: 'lighten_3', icon: 'tint', command: (event) => this.change_card_colors_ext('lighten-3') }},
          { data: { label: 'lighten_2', icon: 'tint', command: (event) => this.change_card_colors_ext('lighten-2') }},
          { data: { label: 'lighten_1', icon: 'tint', command: (event) => this.change_card_colors_ext('lighten-1') }},
          { data: { label: 'normal', icon: 'tint', command: (event) => this.change_card_colors_ext('') }},
          { data: { label: 'darken_1', icon: 'tint', command: (event) => this.change_card_colors_ext('darken-1') }},
          { data: { label: 'darken_2', icon: 'tint', command: (event) => this.change_card_colors_ext('darken-2') }},
          { data: { label: 'darken_3', icon: 'tint', command: (event) => this.change_card_colors_ext('darken-3') }},
          { data: { label: 'darken_4', icon: 'tint', command: (event) => this.change_card_colors_ext('darken-4') }},
          { data: { label: 'accent_1', icon: 'tint', command: (event) => this.change_card_colors_ext('accent-1') }},
          { data: { label: 'accent_2', icon: 'tint', command: (event) => this.change_card_colors_ext('accent-2') }},
          { data: { label: 'accent_3', icon: 'tint', command: (event) => this.change_card_colors_ext('accent-3') }},
          { data: { label: 'accent_4', icon: 'tint', command: (event) => this.change_card_colors_ext('accent-4') }}        
        ]
      },
      {
        data: { label: 'btn', icon: 'hand-pointer-o' },
        children: [
          { data: { label: 'btn_fill', icon: 'tint', command: (event) => this.change_button_fill() }},
          { data: { label: 'btn_shape', icon: 'square', command: (event) => this.change_button_shape() }},          
        ]
      },      
      {
        data: { label: 'others', icon: 'asterisk' },
        children: [
          { data: { label: 'toggle_fav_position', icon: 'star-o', command: (event) => this.refreshSidebarMenu(true) }},
          { data: { label: 'toggle_debud_mode', icon: 'bug', command: (event) => this.toggle_debug() }},          
        ]
      },
    ];
  }

  change_card_colors(color) {
    this.card_colors = color;  
  } 

  change_card_colors_ext(value) {
    this.card_colors_ext = value;  
  } 

  change_button_fill() {
    if (this.button_fill =='btn') {
      this.button_fill = 'btn-outline';
    } else {
      this.button_fill = 'btn';
    }
  }

  change_button_shape() {
    if (this.button_shape =='') {
      this.button_shape = 'btn-rounded';
    } else {
      this.button_shape = '';
    }
  }

  toggle_debug() {
    this.debug = !this.debug;
    this.localStorageService.setDebugMode(this.debug);
  } 

  refreshSidebarMenu(toggle: boolean = false) {
    const fav = this.localStorageService.getFav();
    const currentPosition = this.localStorageService.getFavPosition();
    this.favTopPosition = toggle ? !currentPosition : currentPosition;
    
    console.log(this.favTopPosition);

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

  /**
   *  [COMPONENT FUNCTIONS]
   * @function changeLanguage
   */

  public changeLanguage(lang: string) {
    this.localStorageService.setLang(lang);
    this.translateService.use(lang);
  }

  openToast() {
    console.log(this.form.value);

    const toast = this.form.value;

    const data = {
      type: this.form.valid ? toast.type : 'warning',
      position: toast.position,
      timeOut: toast.timeOut,
      extendedTimeOut: toast.extendedTimeOut,
      closeButton: toast.closeButton,
      progressBar: toast.progressBar,
      tapToDismiss: toast.tapToDismiss,
      title: this.form.valid ? toast.info : 'Missing info!',
      message: this.form.valid ? toast.message : 'Complete all information!',
    };      
    
    this.globalState.notifyMyDataChanged('toast', '', data);
  }

  saveToast() {
    console.log(this.form.value);

    if (this.form.valid) {
      const toast = this.form.value;

      this.localStorageService.setToasty({
        position: toast.position,
        timeOut: toast.timeOut,
        extendedTimeOut: toast.extendedTimeOut,
        closeButton: toast.closeButton,
        progressBar: toast.progressBar,
        tapToDismiss: toast.tapToDismiss
      });

      const data = {
        type: 'success',
        position: toast.position,
        timeOut: toast.timeOut,
        extendedTimeOut: toast.extendedTimeOut,
        closeButton: toast.closeButton,
        progressBar: toast.progressBar,
        tapToDismiss: toast.tapToDismiss,
        title: 'Success',
        message: 'Success',
      };

      this.globalState.notifyMyDataChanged('toast', '', data);
    }    
  }

}
