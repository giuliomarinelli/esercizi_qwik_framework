import { BehaviorSubject } from 'rxjs';

export const messageBus$ = new BehaviorSubject<string>('')