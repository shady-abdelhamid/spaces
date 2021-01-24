import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cta } from './cta.enum';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() public title = '';
  @Input() public isHidden = true;
  @Input() public imgUrl: string;
  @Output() public ctaClick = new EventEmitter();

  public Cta = Cta;

  public get isEditMode(): boolean {
    return this.imgUrl && this.imgUrl.length > 0;
  }
  constructor() { }

  ngOnInit(): void {
  }

  public open(): void {
    this.isHidden = false;
  }

  public close(cta: Cta): void {
    this.isHidden = true;
    this.ctaClick.emit(cta);
  }
}
