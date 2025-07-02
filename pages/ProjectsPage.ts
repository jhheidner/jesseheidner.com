import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProjectsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Main projects section
  get projectsHeading() { return this.page.getByRole('heading', { name: 'Featured Projects' }); }
  get projectsDescription() { return this.page.getByText('Showcasing my latest work in quality assurance and development.'); }

  // Sony Playwright Tests project
  get sonyProjectHeading() { return this.page.getByRole('heading', { name: 'Sony Playwright Tests', level: 3 }); }
  get sonyProjectType() { return this.page.locator('#projects').getByText('Test Automation'); }
  get sonyProjectDescription() { return this.page.getByText('Comprehensive Playwright testing framework developed for Sony Music Publishing'); }
  get sonyPlaywrightText() { return this.page.getByText('Playwright'); }
  get sonyJavaScriptText() { return this.page.getByText('JavaScript'); }
  get sonyHtmlText() { return this.page.getByText('HTML'); }
  get sonyViewCodeLink() { return this.page.getByRole('link', { name: 'View Code' }).first(); }

  // QA Automation Framework project
  get qaFrameworkHeading() { return this.page.getByRole('heading', { name: 'QA Automation Framework', level: 3 }); }
  get qaFrameworkType() { return this.page.getByText('Framework Development'); }
  get qaFrameworkDescription() { return this.page.getByText('Custom-built testing framework designed for scalable quality assurance processes'); }
  get qaSeleniumText() { return this.page.getByText('Selenium'); }
  get qaTestNGText() { return this.page.getByText('TestNG'); }
  get qaJavaText() { return this.page.getByText('Java'); }
  get qaViewProfileLink() { return this.page.getByRole('link', { name: 'View Profile' }); }

  // Mobile Testing Suite project  
  get mobileTestingHeading() { return this.page.getByRole('heading', { name: 'Mobile Testing Suite', level: 3 }); }
  get mobileTestingType() { return this.page.getByText('Mobile QA'); }
  get mobileTestingDescription() { return this.page.getByText('Comprehensive mobile application testing suite covering iOS and Android platforms'); }
  get mobileAppiumText() { return this.page.getByText('Appium'); }
  get mobileCypressText() { return this.page.getByText('Cypress'); }
  get mobileReactNativeText() { return this.page.getByText('React Native'); }
  get mobileLearnMoreLink() { return this.page.getByRole('link', { name: 'Learn More' }); }

  // GitHub CTA section
  get exploreMoreHeading() { return this.page.getByRole('heading', { name: 'Explore More Projects', level: 3 }); }
  get githubDescription() { return this.page.getByText('Check out my GitHub profile for additional projects'); }
  get visitGithubLink() { return this.page.getByRole('link', { name: 'Visit GitHub Profile' }); }

  // Actions
  async navigateToProjects() {
    await this.navigateToSection('projects');
  }

  async clickSonyViewCode() {
    await this.sonyViewCodeLink.click();
  }

  async clickQAViewProfile() {
    await this.qaViewProfileLink.click();
  }

  async clickMobileLearnMore() {
    await this.mobileLearnMoreLink.click();
  }

  async clickVisitGithub() {
    await this.visitGithubLink.click();
  }

  // Helper method to get all projects
  getProjects() {
    return [
      {
        heading: this.sonyProjectHeading,
        type: this.sonyProjectType,
        description: this.sonyProjectDescription,
        technologies: [this.sonyPlaywrightText, this.sonyJavaScriptText, this.sonyHtmlText],
        link: this.sonyViewCodeLink
      },
      {
        heading: this.qaFrameworkHeading,
        type: this.qaFrameworkType,
        description: this.qaFrameworkDescription,
        technologies: [this.qaSeleniumText, this.qaTestNGText, this.qaJavaText],
        link: this.qaViewProfileLink
      },
      {
        heading: this.mobileTestingHeading,
        type: this.mobileTestingType,
        description: this.mobileTestingDescription,
        technologies: [this.mobileAppiumText, this.mobileCypressText, this.mobileReactNativeText],
        link: this.mobileLearnMoreLink
      }
    ];
  }
} 