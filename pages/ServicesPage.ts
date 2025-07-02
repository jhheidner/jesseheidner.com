import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ServicesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Main services section
  get servicesHeading() { return this.page.getByRole('heading', { name: 'Professional QA Services' }); }
  get servicesDescription() { return this.page.getByText('Comprehensive testing solutions to ensure your software meets the highest quality standards.'); }

  // Test Automation service
  get testAutomationHeading() { return this.page.getByRole('heading', { name: 'Test Automation', level: 3 }); }
  get testAutomationDescription() { return this.page.getByText('Design and implement comprehensive automated testing frameworks'); }
  get endToEndTestingText() { return this.page.getByText('✓ End-to-end testing'); }
  get apiTestingText() { return this.page.getByText('✓ API testing'); }
  get performanceTestingText() { return this.page.getByText('✓ Performance testing'); }

  // Quality Assurance service
  get qualityAssuranceHeading() { return this.page.getByRole('heading', { name: 'Quality Assurance', level: 3 }); }
  get qualityAssuranceDescription() { return this.page.getByText('Comprehensive manual testing strategies ensuring your application works perfectly'); }
  get functionalTestingText() { return this.page.getByText('✓ Functional testing'); }
  get userAcceptanceTestingText() { return this.page.getByText('✓ User acceptance testing'); }
  get crossBrowserTestingText() { return this.page.getByText('✓ Cross-browser testing'); }

  // QA Consulting service
  get qaConsultingHeading() { return this.page.getByRole('heading', { name: 'QA Consulting', level: 3 }); }
  get qaConsultingDescription() { return this.page.getByText('Strategic guidance on QA processes, tool selection, and team training'); }
  get processOptimizationText() { return this.page.getByText('✓ Process optimization'); }
  get toolEvaluationText() { return this.page.getByText('✓ Tool evaluation'); }
  get teamTrainingText() { return this.page.getByText('✓ Team training'); }

  // Development Projects service
  get developmentProjectsHeading() { return this.page.getByRole('heading', { name: 'Development Projects', level: 3 }); }
  get developmentProjectsDescription() { return this.page.getByText('Custom development solutions with built-in quality assurance'); }
  get fullStackDevelopmentText() { return this.page.getByText('✓ Full-stack development'); }
  get testingFrameworksText() { return this.page.getByText('✓ Testing frameworks'); }
  get cicdIntegrationText() { return this.page.getByText('✓ CI/CD integration'); }

  // Actions
  async navigateToServices() {
    await this.navigateToSection('services');
  }

  // Helper method to get all service sections
  getServiceSections() {
    return [
      {
        heading: this.testAutomationHeading,
        description: this.testAutomationDescription,
        features: [this.endToEndTestingText, this.apiTestingText, this.performanceTestingText]
      },
      {
        heading: this.qualityAssuranceHeading,
        description: this.qualityAssuranceDescription,
        features: [this.functionalTestingText, this.userAcceptanceTestingText, this.crossBrowserTestingText]
      },
      {
        heading: this.qaConsultingHeading,
        description: this.qaConsultingDescription,
        features: [this.processOptimizationText, this.toolEvaluationText, this.teamTrainingText]
      },
      {
        heading: this.developmentProjectsHeading,
        description: this.developmentProjectsDescription,
        features: [this.fullStackDevelopmentText, this.testingFrameworksText, this.cicdIntegrationText]
      }
    ];
  }
} 