export interface IComponent {
  onInit():void;
  doCheck():void;
  onChanges():void;
  afterContentInit():void;
  afterContentChecked():void;
  afterViewInit():void;
  afterViewChecked():void;
  onDestroy():void;
}
