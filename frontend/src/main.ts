/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { TermsPageComponent } from './app/terms-page/terms-page.component';
import { CustomerHomeComponent } from './app/customer/home/home.component';
import { UserJourneyComponent } from './app/user-journey/user-journey.component';
import { ContentCreatorHomeComponent } from './app/content-creator/home/home.component';
import { ContentCreatorAddProductComponent } from './app/content-creator/product/add-product/add-product.component';
import { ContentCreatorAddServiceComponent } from './app/content-creator/service/add-service/add-service.component';
import { ContentCreatorEditProductComponent } from './app/content-creator/product/edit-product/edit-product.component';
import { ContentCreatorEditServiceComponent } from './app/content-creator/service/edit-service/edit-service.component';
import { importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ScreenTrackingService, UserTrackingService, getAnalytics, provideAnalytics } from '@angular/fire/analytics'
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';
import { environment } from './environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CustomerGuideComponent } from './app/customer/guide/guide.component';
import { provideStorage } from '@angular/fire/storage';
import { getStorage } from '@angular/fire/storage';
import { CustomerExperienceAnalystHomeComponent } from './app/customer-experience-analyst/home/home.component';
import { CustomerServiceAgentHomeComponent } from './app/customer-service-agent/home/home.component';
import { ContactCenterAnalystHomeComponent } from './app/contact-center-analyst/home/home.component';
import { FieldServiceAgentHomeComponent } from './app/field-service-agent/home/home.component';
import { FieldServiceAgentJobComponent } from './app/field-service-agent/job/job.component';

export const routes: Routes = [
  { path: 'demo/terms', component: TermsPageComponent, title: 'CSM - Demo Terms' },
  { path: '', redirectTo: '/demo/terms', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'demo/user-journey', component: UserJourneyComponent, title: 'CSM - User Journeys' },
  { path: 'demo/customer', component: CustomerGuideComponent, title: 'CSM - Customer Guide' },
  { path: 'customer/home', component: CustomerHomeComponent, title: 'Cymbal Furniture - Home' },
  { path: 'content-creator/home', component: ContentCreatorHomeComponent, title: 'Cymbal Furniture CMS - Home' },
  { path: 'content-creator/add-product', component: ContentCreatorAddProductComponent, title: 'Cymbal Furniture CMS - Add Product' },
  { path: 'content-creator/add-service', component: ContentCreatorAddServiceComponent, title: 'Cymbal Furniture CMS - Add Service' },
  { path: 'content-creator/edit-product', component: ContentCreatorEditProductComponent, title: 'Cymbal Furniture - Edit Product' },
  { path: 'content-creator/edit-service', component: ContentCreatorEditServiceComponent, title: 'Cymbal Furniture - Edit Service' },
  { path: 'customer-experience-analyst/home', component: CustomerExperienceAnalystHomeComponent, title: 'Cymbal Furniture - CX Management - Home' },
  { path: 'customer-service-agent/home', component: CustomerServiceAgentHomeComponent, title: 'Cymbal Furniture - Customer Service - Home' },
  { path: 'contact-center-analyst/home', component: ContactCenterAnalystHomeComponent, title: 'Cymbal Furniture - Contact Center - Home' },
  { path: 'field-service-agent/home', component: FieldServiceAgentHomeComponent, title: 'Cymbal Furniture - Field Service - Home' },
  { path: 'field-service-agent/job', component: FieldServiceAgentJobComponent, title: 'Cymbal Furniture - Field Service - Job' },

];

bootstrapApplication(
  AppComponent,
  {
    providers: [
      provideHttpClient(),
      provideRouter(routes),
      importProvidersFrom([
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        provideAnalytics(() => getAnalytics()),
        provideStorage(() => getStorage())
      ]),
      provideAnimations(),
      ScreenTrackingService,
      UserTrackingService
    ]
  })
  .catch(err => console.error(err));
