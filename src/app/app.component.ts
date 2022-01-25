import { Component, OnInit } from "@angular/core";
import { MarketsResponse } from "./interfaces/market.interface";
import { CriptoService } from "./services/cripto.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Cripto";
  public criptoList: MarketsResponse[] = [];
  public filteredCriptoList: MarketsResponse[] = [];
  public searchText = "";
  public isFiltered: boolean = false;
  public isLoading: boolean = true;

  constructor(private _criptoService: CriptoService) {}

  ngOnInit(): void {
    this._criptoService.getAll().subscribe((coins) => {
      this.criptoList = coins;
      this.filteredCriptoList = coins;
      this.isLoading = false;
    });
  }

  searchCripto() {
    this.isFiltered = true;
    this.filteredCriptoList = this.criptoList.filter(
      (x) =>
        x.name.toLocaleLowerCase().includes(this.searchText) ||
        x.symbol.toLocaleLowerCase().includes(this.searchText)
    );
  }
}
