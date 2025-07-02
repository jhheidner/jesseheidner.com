import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Hero section elements
  get mainHeading() { return this.page.getByRole('heading', { name: 'Quality Assurance Excellence. Built to Scale.' }); }
  get heroDescription() { return this.page.getByText('Senior QA Expert specializing in automated testing'); }
  get exploreServicesButton() { return this.page.getByRole('link', { name: 'Explore Services' }); }
  get viewProjectsButton() { return this.page.getByRole('link', { name: 'View Projects' }); }
  
  // Code snippet section
  get codeSnippet() { return this.page.getByText('qa-automation.spec.js'); }

  // Navigation verification helpers
  async verifyNavigationLinks() {
    const navLinks = [
      { link: this.homeLink, href: '#home' },
      { link: this.servicesLink, href: '#services' },
      { link: this.businessToolsLink, href: '#business-tools' },
      { link: this.projectsLink, href: '#projects' },
      { link: this.aboutLink, href: '#about' },
      { link: this.contactLink, href: '#contact' }
    ];
    return navLinks;
  }

  // Actions
  async navigateToHome() {
    await this.goto();
  }

  async clickExploreServices() {
    await this.exploreServicesButton.click();
  }

  async clickViewProjects() {
    await this.viewProjectsButton.click();
  }
} 