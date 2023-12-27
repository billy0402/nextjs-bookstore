import { asFunction } from 'awilix';

import HomePageViewModel from '@/pages/ViewModel';
import createTypedContainer from './create-typed-container';

const registrations = {
  homePageViewModel: asFunction(HomePageViewModel),
};

const container = createTypedContainer(registrations);

export default container;
