import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiMaterialModule } from '@xreats/ui';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderComponent],
			imports: [UiMaterialModule],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should display the company brand name', () => {
		const brandName = fixture.nativeElement.querySelector('[data-test="brand-name"]');

		expect(brandName.textContent).toEqual('XrEats');
	});
});
