import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ExperienceComponent } from './experience/experience.component';
import {EducationComponent} from './education/education.component';
import {SkillsComponent} from './skills/skills.component';
import {InterestsComponent} from './interests/interests.component';
import {AwardsComponent } from './awards/awards.component';
const routes: Routes = [
  {
    path:'about',
    component:AboutComponent

},
{
path:'experience',
component:ExperienceComponent
},
{
  path:'education',
  component:EducationComponent
},
{
path:'skills',
component:SkillsComponent
},
{
path:'interests',
component:InterestsComponent
},
{
path:"awards",
component:AwardsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
