import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorage: DataStorageService) {}

  ngOnInit(): void {
    this.onfetchData();
  }
  //* saving the recipes in the firebase
  onSaveData() {
    this.dataStorage.saveRecipes();
  }

  //* fetching the recipes from firebase
  onfetchData() {
    this.dataStorage.fetchReciepes();
  }
}
