import { Directive, Input, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';

@Directive({
    selector: '[connectForm]'
})
export class ConnectFormDirective implements OnInit {
    @Input('connectForm') path: string;

    constructor(
        private formGroupDirective: FormGroupDirective,
        private store: Store<IAppState>
    ) {}

    ngOnInit() {
        // Update the form value based on the state
        this.store.select(state => { 
            state.forms[this.path].take(1)
                    .subscribe(formValue => {
                        this.formGroupDirective.form.patchValue(formValue);
                    });
            });
    }
}