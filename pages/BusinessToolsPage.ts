import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class BusinessToolsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Main business tools section
  get businessToolsHeading() { return this.page.getByRole('heading', { name: 'Business Tools & Solutions' }); }
  get businessToolsDescription() { return this.page.getByText('Custom digital solutions designed to streamline your business operations'); }

  // Custom Chatbots service
  get customChatbotsHeading() { return this.page.getByRole('heading', { name: 'Custom Chatbots', level: 3 }); }
  get chatbotsDescription() { return this.page.getByText('Intelligent AI-powered chatbots tailored to your business needs'); }
  get naturalLanguageText() { return this.page.getByText('✓ Natural language processing'); }
  get multiPlatformText() { return this.page.getByText('✓ Multi-platform integration'); }
  get analyticsReportingText() { return this.page.getByText('✓ Analytics & reporting'); }
  get customTrainingText() { return this.page.getByText('✓ Custom training on your data'); }

  // Website Creation service
  get websiteCreationHeading() { return this.page.getByRole('heading', { name: 'Website Creation', level: 3 }); }
  get websiteDescription() { return this.page.getByText('Professional, responsive websites built with modern technologies'); }
  get responsiveDesignText() { return this.page.getByText('✓ Responsive design'); }
  get seoOptimizationText() { return this.page.getByText('✓ SEO optimization'); }
  get performanceOptimizationText() { return this.page.getByText('✓ Performance optimization'); }
  get cmsText() { return this.page.getByText('✓ Content management systems'); }

  // Process Automation service
  get processAutomationHeading() { return this.page.getByRole('heading', { name: 'Process Automation', level: 3 }); }
  get automationDescription() { return this.page.getByText('Streamline your business workflows with custom automation solutions'); }
  get workflowAutomationText() { return this.page.getByText('✓ Workflow automation'); }
  get dataProcessingText() { return this.page.getByText('✓ Data processing'); }
  get integrationSolutionsText() { return this.page.getByText('✓ Integration solutions'); }
  get customDashboardsText() { return this.page.getByText('✓ Custom dashboards'); }

  // Analytics & Insights service
  get analyticsInsightsHeading() { return this.page.getByRole('heading', { name: 'Analytics & Insights', level: 3 }); }
  get analyticsDescription() { return this.page.getByText('Transform your data into actionable insights with custom analytics solutions'); }
  get customReportingText() { return this.page.getByText('✓ Custom reporting'); }
  get realTimeAnalyticsText() { return this.page.getByText('✓ Real-time analytics'); }
  get dataVisualizationText() { return this.page.getByText('✓ Data visualization'); }
  get performanceMetricsText() { return this.page.getByText('✓ Performance metrics'); }

  // CTA section
  get transformBusinessHeading() { return this.page.getByRole('heading', { name: 'Ready to Transform Your Business?' }); }
  get ctaDescription() { return this.page.getByText('Let\'s discuss how these custom solutions can streamline your operations'); }
  get getStartedButton() { return this.page.getByRole('link', { name: 'Get Started' }); }

  // Actions
  async navigateToBusinessTools() {
    await this.navigateToSection('business-tools');
  }

  async clickGetStarted() {
    await this.getStartedButton.click();
  }

  // Helper method to get all business tool sections
  getBusinessToolSections() {
    return [
      {
        heading: this.customChatbotsHeading,
        description: this.chatbotsDescription,
        features: [this.naturalLanguageText, this.multiPlatformText, this.analyticsReportingText, this.customTrainingText]
      },
      {
        heading: this.websiteCreationHeading,
        description: this.websiteDescription,
        features: [this.responsiveDesignText, this.seoOptimizationText, this.performanceOptimizationText, this.cmsText]
      },
      {
        heading: this.processAutomationHeading,
        description: this.automationDescription,
        features: [this.workflowAutomationText, this.dataProcessingText, this.integrationSolutionsText, this.customDashboardsText]
      },
      {
        heading: this.analyticsInsightsHeading,
        description: this.analyticsDescription,
        features: [this.customReportingText, this.realTimeAnalyticsText, this.dataVisualizationText, this.performanceMetricsText]
      }
    ];
  }
} 