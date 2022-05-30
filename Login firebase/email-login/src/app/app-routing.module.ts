import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canLoad: [IntroGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'partners',
    loadChildren: () => import('./partners/partners.module').then( m => m.PartnersPageModule)
  },
  {
    path: 'getlegalservices',
    loadChildren: () => import('./getlegalservices/getlegalservices.module').then( m => m.GetlegalservicesPageModule)
  },
  {
    path: 'practiceareas',
    loadChildren: () => import('./practiceareas/practiceareas.module').then( m => m.PracticeareasPageModule)
  },
  {
    path: 'freetips',
    loadChildren: () => import('./freetips/freetips.module').then( m => m.FreetipsPageModule)
  },
  {
    path: 'privacypolicy',
    loadChildren: () => import('./privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
  },
  {
    path: 'drafting',
    loadChildren: () => import('./drafting/drafting.module').then( m => m.DraftingPageModule)
  },
  {
    path: 'probono',
    loadChildren: () => import('./probono/probono.module').then( m => m.ProbonoPageModule)
  },
  {
    path: 'agreement',
    loadChildren: () => import('./agreement/agreement.module').then( m => m.AgreementPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'companyregrequirments',
    loadChildren: () => import('./companyregrequirments/companyregrequirments.module').then( m => m.CompanyregrequirmentsPageModule)
  },
  {
    path: 'imllionshare',
    loadChildren: () => import('./imllionshare/imllionshare.module').then( m => m.ImllionsharePageModule)
  },
  {
    path: 'threemillion',
    loadChildren: () => import('./threemillion/threemillion.module').then( m => m.ThreemillionPageModule)
  },
  {
    path: 'fivemillion',
    loadChildren: () => import('./fivemillion/fivemillion.module').then( m => m.FivemillionPageModule)
  },
  {
    path: 'tenmillion',
    loadChildren: () => import('./tenmillion/tenmillion.module').then( m => m.TenmillionPageModule)
  },
  {
    path: 'choosereg',
    loadChildren: () => import('./choosereg/choosereg.module').then( m => m.ChooseregPageModule)
  },
  {
    path: 'lettersofadministration',
    loadChildren: () => import('./lettersofadministration/lettersofadministration.module').then( m => m.LettersofadministrationPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'proceedbusinesname',
    loadChildren: () => import('./proceedbusinesname/proceedbusinesname.module').then( m => m.ProceedbusinesnamePageModule)
  },
  {
    path: 'proceedonemillion',
    loadChildren: () => import('./proceedonemillion/proceedonemillion.module').then( m => m.ProceedonemillionPageModule)
  },
  {
    path: 'proceedtwomillion',
    loadChildren: () => import('./proceedtwomillion/proceedtwomillion.module').then( m => m.ProceedtwomillionPageModule)
  },
  {
    path: 'proceedthreemillion',
    loadChildren: () => import('./proceedthreemillion/proceedthreemillion.module').then( m => m.ProceedthreemillionPageModule)
  },
  {
    path: 'proceedfivemillion',
    loadChildren: () => import('./proceedfivemillion/proceedfivemillion.module').then( m => m.ProceedfivemillionPageModule)
  },  {
    path: 'powerofattorney',
    loadChildren: () => import('./powerofattorney/powerofattorney.module').then( m => m.PowerofattorneyPageModule)
  },
  {
    path: 'criminaldefence',
    loadChildren: () => import('./criminaldefence/criminaldefence.module').then( m => m.CriminaldefencePageModule)
  },
  {
    path: 'electionpetition',
    loadChildren: () => import('./electionpetition/electionpetition.module').then( m => m.ElectionpetitionPageModule)
  },
  {
    path: 'divorcecustody',
    loadChildren: () => import('./divorcecustody/divorcecustody.module').then( m => m.DivorcecustodyPageModule)
  },
  {
    path: 'bail',
    loadChildren: () => import('./bail/bail.module').then( m => m.BailPageModule)
  },
  {
    path: 'drafting',
    loadChildren: () => import('./drafting/drafting.module').then( m => m.DraftingPageModule)
  },
  {
    path: 'simplewill',
    loadChildren: () => import('./simplewill/simplewill.module').then( m => m.SimplewillPageModule)
  },
  {
    path: 'simplewill',
    loadChildren: () => import('./simplewill/simplewill.module').then( m => m.SimplewillPageModule)
  },
  {
    path: 'lodgwillservices',
    loadChildren: () => import('./lodgwillservices/lodgwillservices.module').then( m => m.LodgwillservicesPageModule)
  },
  {
    path: 'lodgedetachwill',
    loadChildren: () => import('./lodgedetachwill/lodgedetachwill.module').then( m => m.LodgedetachwillPageModule)
  },
  {
    path: 'simplewill',
    loadChildren: () => import('./simplewill/simplewill.module').then( m => m.SimplewillPageModule)
  },
  {
    path: 'simplewill',
    loadChildren: () => import('./simplewill/simplewill.module').then( m => m.SimplewillPageModule)
  },
  {
    path: 'applybail',
    loadChildren: () => import('./applybail/applybail.module').then( m => m.ApplybailPageModule)
  },
  {
    path: 'caveat',
    loadChildren: () => import('./caveat/caveat.module').then( m => m.CaveatPageModule)
  },
  {
    path: 'proceed4million',
    loadChildren: () => import('./proceed4million/proceed4million.module').then( m => m.Proceed4millionPageModule)
  },
  {
    path: 'proceed5million',
    loadChildren: () => import('./proceed5million/proceed5million.module').then( m => m.Proceed5millionPageModule)
  },
  {
    path: 'fourmillion',
    loadChildren: () => import('./fourmillion/fourmillion.module').then( m => m.FourmillionPageModule)
  },
  {
    path: 'simplyprobate',
    loadChildren: () => import('./simplyprobate/simplyprobate.module').then( m => m.SimplyprobatePageModule)
  },
  {
    path: 'cooperate',
    loadChildren: () => import('./cooperate/cooperate.module').then( m => m.CooperatePageModule)
  },
  {
    path: 'elect',
    loadChildren: () => import('./elect/elect.module').then( m => m.ElectPageModule)
  },
  {
    path: 'coop',
    loadChildren: () => import('./coop/coop.module').then( m => m.CoopPageModule)
  },
  {
    path: 'com',
    loadChildren: () => import('./com/com.module').then( m => m.ComPageModule)
  },
  {
    path: 'bennybonny',
    loadChildren: () => import('./bennybonny/bennybonny.module').then( m => m.BennybonnyPageModule)
  },
  {
    path: 'nnamdi',
    loadChildren: () => import('./nnamdi/nnamdi.module').then( m => m.NnamdiPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
