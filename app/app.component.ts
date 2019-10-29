import { Component, OnInit, Inject } from "@angular/core";
import { FormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { CovenantsService } from "./covenants.service";
import { statuses } from "./data/statuses";
import {
  filterBy,
  FilterDescriptor,
  CompositeFilterDescriptor,
  distinct
} from "@progress/kendo-data-query";



const createFormGroup = dataItem =>
  new FormGroup({
    id: new FormControl(dataItem.id),
    covenantId: new FormControl(dataItem.covenantId),
    company: new FormControl(dataItem.company),
    covenant: new FormControl(dataItem.covenant),
    result: new FormControl(dataItem.result),
    assetClass: new FormControl(dataItem.assetClass),
    rmgComment: new FormControl(dataItem.covenant.rmgComment),
    initialNonCompliance: new FormControl(dataItem.initialNonCompliance),
    calculatedStatusId: new FormControl(dataItem.calculatedStatusId),
    overrideStatusId: new FormControl(
      dataItem.covenant.overrideStatusId,
      Validators.required
    ),
    waivedUntil: new FormControl(dataItem.covenant.waivedUntil),
    lastModified: new FormControl(dataItem.lastModified)
  });

const flatten = filter => {
  const filters = filter.filters;
  if (filters) {
    return filters.reduce(
      (acc, curr) => acc.concat(curr.filters ? flatten(curr) : [curr]),
      []
    );
  }
  return [];
};

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  public statuses: any[] = statuses;
  public formGroup: FormGroup;
  private editedRowIndex: number;

  public filter: CompositeFilterDescriptor;
  public filtedCovenantList: any[];
  public gridData: any[];

  constructor(private service: CovenantsService) {
    this.filtedCovenantList = this.service.covenants();
    this.filterChange(null);
  }

  public filterChange(filter: CompositeFilterDescriptor): void {
    this.filter = filter;
    this.gridData = filterBy(this.filtedCovenantList, filter);
  }

  public status(id: number): any {
    return this.statuses.find(x => x.id === id);
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.formGroup = createFormGroup(dataItem);

    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, formGroup, isNew }): void {
    const product = formGroup.value;
    this.service.save(product, isNew);
    sender.closeRow(rowIndex);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}
