import {Observable} from "rxjs";

export interface Action {
  matIcon: string;
  i18nActionKey: string;
  actionName?: string;
  showIf?: Observable<boolean>
}

export interface MainAction extends Action{
  routerLink: string;
  liftHigherOnMobile?: boolean;
}

export interface ToolbarAction extends Action {
  action: () => any;
}
