import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cta } from './cta.enum';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return TRUE if is used in edit mode', () => {
    component.imgUrl = 'hello world';

    expect(component.isEditMode).toBeTruthy();
  });

  describe('open', () => {
    it('should set isHidden to false', () => {
      component.open();

      expect(component.isHidden).toBeFalse();
    });
  });

  describe('close', () => {
    it('should set isHidden to true', () => {
      component.close(Cta.Submit);

      expect(component.isHidden).toBeTrue();
    });

    it('should emit "submit" if submit button is clicked', () => {
      spyOn(component.ctaClick, 'emit');

      component.close(Cta.Submit);

      expect(component.ctaClick.emit).toHaveBeenCalledWith(Cta.Submit);
    });

    it('should emit "cancel" if submit button is clicked', () => {
      spyOn(component.ctaClick, 'emit');

      component.close(Cta.Cancel);

      expect(component.ctaClick.emit).toHaveBeenCalledWith(Cta.Cancel);
    });
  });

});
