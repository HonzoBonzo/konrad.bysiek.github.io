import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { EducationComponent } from './sections/education/education.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { LanguaguesComponent } from './sections/languagues/languagues.component';
import { InterestsComponent } from './sections/interests/interests.component';
import { ClausuleComponent } from './sections/clausule/clausule.component';
import { ContactComponent } from './sections/contact/contact.component';

library.add(fas, fab);

@NgModule({
  declarations: [AppComponent, EducationComponent, ExperienceComponent, SkillsComponent, LanguaguesComponent, InterestsComponent, ClausuleComponent, ContactComponent],
  imports: [BrowserModule, NgbModule.forRoot(), FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
