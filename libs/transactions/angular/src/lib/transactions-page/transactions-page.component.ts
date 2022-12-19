import { Component } from '@angular/core';
import { read, utils } from 'xlsx';
import { TRANSACTIONS_PAGE_TEST_IDS } from './testing';

@Component({
  selector: 'didactic-octo-happiness-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.scss'],
})
export class TransactionsPageComponent {
  readonly TEST_IDS = TRANSACTIONS_PAGE_TEST_IDS;

  async onFileChange(event: Event) {
    const eventTarget = event.target as HTMLInputElement;
    const files: FileList | null = eventTarget.files;
    if (files === null || files.length < 1) {
      return;
    }

    Array.from(files).forEach(async (file) => {
      const ws = read(await file.arrayBuffer());
      Object.values(ws.Sheets).forEach((sheet) => {
        const delimeter = '\n';
        const csv = utils
          .sheet_to_csv(sheet, { RS: delimeter })
          .split(delimeter);

        console.log(`isOcbcAccSheet: ${this.isOcbcAccSheet(csv)}`);
      });
    });
  }

  private isOcbcAccSheet(csv: string[]): boolean {
    if (csv.length < 5) {
      return false;
    }

    if (!csv[0].startsWith(`Account details for:`)) {
      console.log("doesn't start with account details for");
      return false;
    }

    if (!csv[1].startsWith(`Available Balance`)) {
      console.log("doesn't start with available balance");
      return false;
    }

    if (!csv[2].startsWith(`Ledger Balance`)) {
      console.log("doesn't start with ledger balance");
      return false;
    }

    return true;
  }
}
