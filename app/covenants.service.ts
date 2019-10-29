import { Injectable } from "@angular/core";
import { covenants } from "./data/covenants2";
import { statuses } from "./data/statuses";

export interface Covenant {
    id: number,
    company: string,
    initialNonCompliance: Date,
    covenant: string,
    result: string,
    calculatedStatusId: number,
    overrideStatusId: number,
    waivedUntil: Date,
    rmgComment: string,
    lastModified: string,
    editable: number,
    statuses: CovenantAssetClassStatus[],
    
    rawStatuses: string,
    overrideStatusValue: string
}
export interface CovenantAssetClassStatus {
  id: number,
  assetClass: string,
  result: string,
  calculatedStatusId: number,
}

export interface CovenantStatusRow {
  isParent: boolean,
  isChild: boolean,
  covenant: Covenant,
  assetClassStatus: CovenantAssetClassStatus,
}


@Injectable()
export class CovenantsService {
  private statuses: any[] = statuses;

  private data: any[] = this.parse(covenants);
  private counter: number = covenants.length;

  public covenants(): CovenantStatusRow[] {
    let results = new Array<CovenantStatusRow>();
    
    this.data.forEach(c => {

      results.push(<CovenantStatusRow>{
        covenant: c,
        isParent: true
      });

      c.rawStatuses = '';
      c.statuses.forEach(s => {
        c.rawStatuses += ' ' + this.status(s.calculatedStatusId);
      });

      if (c.overrideStatusId){
        c.overrideStatusValue = this.status(c.overrideStatusId);
      }

      c.statuses.forEach(s => {
        results.push(<CovenantStatusRow>{
          covenant: c,
          assetClassStatus: s,
          isChild: true
        });
      });
    });

    return results;
  }

  private status(id: number): any {
    return this.statuses.find(x => x.id === id).name;
  }

  public save(covenantForm: any, isNew: boolean): void {
    let item = this.data
      .find(({ id }) => id === covenantForm.covenant.id);
    item.overrideStatusId = covenantForm.overrideStatusId;
    item.waivedUntil = covenantForm.waivedUntil;
    item.rmgComment = covenantForm.rmgComment;
  }

  private parse(json) {
    Object.keys(json).map(key => {
      const date = new Date(json[key]);
      if (!isNaN(date.getTime())) {
        json[key] = date;
      }
    });

    return json;
  }
}
