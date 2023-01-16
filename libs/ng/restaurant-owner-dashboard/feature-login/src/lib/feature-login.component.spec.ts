import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DataAccessLoginFacade } from '@xreats/ng/data-access';
import { UiAlertModule, UiMaterialModule, UiNavigationModule } from '@xreats/ui';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { FeatureLoginComponent } from './feature-login.component';

describe('FeatureLoginComponent', () => {
	let component: FeatureLoginComponent;
	let fixture: ComponentFixture<FeatureLoginComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FeatureLoginComponent, LoginFormComponent],
			imports: [
				NoopAnimationsModule, 
				FormsModule, 
				ReactiveFormsModule,
				UiMaterialModule, 
				UiNavigationModule, 
				UiAlertModule],
			providers: [
				{
					provide: DataAccessLoginFacade,
					useValue: {
						dispatchLoginRequestStartAction: jest.fn(),
					},
				},
			],
		}).compileComponents();

		fixture = TestBed.createComponent(FeatureLoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should render the header component', () => {
		const header = fixture.nativeElement.querySelector('ui-header');

		expect(header).toBeTruthy();
	});

	it('should render the loginForm component', () => {
		const loginForm = fixture.nativeElement.querySelector('feature-login-form');

		expect(loginForm).toBeTruthy();
	});

	it('should render the footer component', () => {
		const footer = fixture.nativeElement.querySelector('ui-footer');

		expect(footer).toBeTruthy();
	});
});
