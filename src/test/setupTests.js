import {matchers} from '@testing-library/jasmine-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Agregar los matchers de Testing Library a Jasmine
beforeEach(() => {
    jasmine.getEnv().addMatchers(matchers);
});
