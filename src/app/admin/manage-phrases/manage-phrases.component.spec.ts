import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePhrasesComponent } from './manage-phrases.component';

describe('ManagePhrasesComponent', () => {
  let component: ManagePhrasesComponent;
  let fixture: ComponentFixture<ManagePhrasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePhrasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePhrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
