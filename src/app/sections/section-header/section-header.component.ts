import { Component, Input } from "@angular/core";

@Component({
  selector: "app-section-header",
  templateUrl: "./section-header.component.html",
  styleUrls: ["./section-header.component.css"]
})
export class SectionHeaderComponent {
  @Input() headerText = "Sekcja";
  @Input() iconName = "hand-point-down";
  @Input() iconPrefix = "fas";
}
