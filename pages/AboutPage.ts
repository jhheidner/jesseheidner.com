import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AboutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Main about section
  get aboutHeading() { return this.page.getByRole('heading', { name: 'About Jesse Heidner' }); }
  get aboutDescription1() { return this.page.getByText('As a Senior Quality Assurance Tester and Expert'); }
  get aboutDescription2() { return this.page.getByText('I specialize in building robust testing frameworks using modern tools'); }

  // Core Expertise section
  get coreExpertiseHeading() { return this.page.getByRole('heading', { name: 'Core Expertise', level: 3 }); }
  get testAutomationExpertise() { return this.page.getByText('Test Automation (Playwright, Selenium)'); }
  get apiTestingExpertise() { return this.page.getByText('API Testing & Performance Testing'); }
  get cicdExpertise() { return this.page.getByText('CI/CD Integration & DevOps'); }
  get crossBrowserExpertise() { return this.page.getByText('Cross-browser & Mobile Testing'); }
  get processOptimizationExpertise() { return this.page.getByText('Quality Process Optimization'); }
  get fullStackExpertise() { return this.page.locator('#about').getByText('Full-stack Development'); }

  // Statistics section
  get yearsExperienceStat() { return this.page.getByText('20', { exact: true }); }
  get yearsExperienceLabel() { return this.page.getByText('Years Experience'); }
  
  get projectsTestedStat() { return this.page.getByText('100+'); }
  get projectsTestedLabel() { return this.page.getByText('Projects Tested'); }
  
  get deploymentSpeedStat() { return this.page.getByText('3x'); }
  get deploymentSpeedLabel() { return this.page.getByText('Deployment Speed'); }
  
  get qualityMonitoringStat() { return this.page.getByText('24/7'); }
  get qualityMonitoringLabel() { return this.page.getByText('Quality Monitoring'); }

  // Actions
  async navigateToAbout() {
    await this.navigateToSection('about');
  }

  // Helper method to get all expertise items
  getExpertiseItems() {
    return [
      this.testAutomationExpertise,
      this.apiTestingExpertise,
      this.cicdExpertise,
      this.crossBrowserExpertise,
      this.processOptimizationExpertise,
      this.fullStackExpertise
    ];
  }

  // Helper method to get all statistics
  getStatistics() {
    return [
      { stat: this.yearsExperienceStat, label: this.yearsExperienceLabel, value: '20' },
      { stat: this.projectsTestedStat, label: this.projectsTestedLabel, value: '100+' },
      { stat: this.deploymentSpeedStat, label: this.deploymentSpeedLabel, value: '3x' },
      { stat: this.qualityMonitoringStat, label: this.qualityMonitoringLabel, value: '24/7' }
    ];
  }
} 