import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  public readonly baseURL = 'https://jesseheidner.com';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.baseURL);
  }

  async gotoSection(section: string) {
    await this.page.goto(`${this.baseURL}/#${section}`);
  }

  // Navigation elements
  get navigation() { return this.page.getByRole('navigation'); }
  get brandHeading() { return this.navigation.getByRole('heading', { name: 'Jesse Heidner', level: 2 }); }
  
  // Navigation links
  get homeLink() { return this.page.getByRole('link', { name: 'Home', exact: true }); }
  get servicesLink() { return this.page.getByRole('link', { name: 'Services', exact: true }); }
  get businessToolsLink() { return this.page.getByRole('link', { name: 'Business Tools', exact: true }); }
  get projectsLink() { return this.page.getByRole('link', { name: 'Projects', exact: true }); }
  get aboutLink() { return this.page.getByRole('link', { name: 'About', exact: true }); }
  get contactLink() { return this.page.getByRole('link', { name: 'Contact', exact: true }); }

  // Footer elements
  get footer() { return this.page.locator('footer'); }
  get footerBrandHeading() { return this.footer.getByRole('heading', { name: 'Jesse Heidner', level: 3 }); }
  get copyrightText() { return this.page.getByText('© 2024 Jesse Heidner. All rights reserved.'); }

  // Common actions
  async navigateToSection(section: 'services' | 'business-tools' | 'projects' | 'about' | 'contact') {
    const linkMap = {
      'services': this.servicesLink,
      'business-tools': this.businessToolsLink,
      'projects': this.projectsLink,
      'about': this.aboutLink,
      'contact': this.contactLink
    };
    await linkMap[section].click();
  }
} 