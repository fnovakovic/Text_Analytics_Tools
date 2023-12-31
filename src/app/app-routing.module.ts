import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth.guard";
import {ConfigureComponent} from "./components/configure/configure.component";
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";
import {HistoryComponent} from "./components/history/history.component";

const routes: Routes = [
  {
    path: "",
    component: ConfigureComponent,
  },
  {
    path: "configure",
    component: ConfigureComponent,
  },
  {
    path: "entityExtraction",
    component: EntityExtractionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "textSimilarity",
    component: TextSimilarityComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "languageDetection",
    component: LanguageDetectionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "sentimentAnalysis",
    component: SentimentAnalysisComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "history",
    component: HistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
