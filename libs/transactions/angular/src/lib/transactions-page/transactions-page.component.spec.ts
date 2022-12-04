import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TRANSACTIONS_PAGE_TEST_IDS } from './testing/';
import { TransactionsPageComponent } from './transactions-page.component';

describe('TransactionsPageComponent', () => {
  let component: TransactionsPageComponent;
  let fixture: ComponentFixture<TransactionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('file upload', () => {
    let debugElement: DebugElement;
    const { FILE_INPUT_UPLOAD } = TRANSACTIONS_PAGE_TEST_IDS;
    const inputFileSelector = `input[type=file][data-testid=${FILE_INPUT_UPLOAD}]`;

    beforeEach(() => {
      debugElement = fixture.debugElement;
    });

    it('should render element', () => {
      expect(debugElement.query(By.css(inputFileSelector))).toBeTruthy();
    });
  });
});
