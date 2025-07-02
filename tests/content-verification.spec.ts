import { test, expect } from '@playwright/test';

test.describe('Jesse Heidner Website - Content Verification Tests', () => {
  const BASE_URL = 'https://jesseheidner.com';

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('should display services section correctly', async ({ page }) => {
    await page.getByRole('link', { name: 'Services', exact: true }).click();
    
    // Verify main services heading
    await expect(page.getByRole('heading', { name: 'Professional QA Services' })).toBeVisible();
    await expect(page.getByText('Comprehensive testing solutions to ensure your software meets the highest quality standards.')).toBeVisible();
    
    // Verify Test Automation service
    await expect(page.getByRole('heading', { name: 'Test Automation', level: 3 })).toBeVisible();
    await expect(page.getByText('Design and implement comprehensive automated testing frameworks')).toBeVisible();
    await expect(page.getByText('✓ End-to-end testing')).toBeVisible();
    await expect(page.getByText('✓ API testing')).toBeVisible();
    await expect(page.getByText('✓ Performance testing')).toBeVisible();
    
    // Verify Quality Assurance service
    await expect(page.getByRole('heading', { name: 'Quality Assurance', level: 3 })).toBeVisible();
    await expect(page.getByText('✓ Functional testing')).toBeVisible();
    await expect(page.getByText('✓ User acceptance testing')).toBeVisible();
    await expect(page.getByText('✓ Cross-browser testing')).toBeVisible();
    
    // Verify QA Consulting service
    await expect(page.getByRole('heading', { name: 'QA Consulting', level: 3 })).toBeVisible();
    await expect(page.getByText('✓ Process optimization')).toBeVisible();
    await expect(page.getByText('✓ Tool evaluation')).toBeVisible();
    await expect(page.getByText('✓ Team training')).toBeVisible();
    
    // Verify Development Projects service
    await expect(page.getByRole('heading', { name: 'Development Projects', level: 3 })).toBeVisible();
    await expect(page.getByText('✓ Full-stack development')).toBeVisible();
    await expect(page.getByText('✓ Testing frameworks')).toBeVisible();
    await expect(page.getByText('✓ CI/CD integration')).toBeVisible();
  });

  test('should display business tools section correctly', async ({ page }) => {
    await page.getByRole('link', { name: 'Business Tools', exact: true }).click();
    
    // Verify main business tools heading
    await expect(page.getByRole('heading', { name: 'Business Tools & Solutions' })).toBeVisible();
    await expect(page.getByText('Custom digital solutions designed to streamline your business operations')).toBeVisible();
    
    // Verify Custom Chatbots
    await expect(page.getByRole('heading', { name: 'Custom Chatbots', level: 3 })).toBeVisible();
    await expect(page.getByText('✓ Natural language processing')).toBeVisible();
    await expect(page.getByText('✓ Multi-platform integration')).toBeVisible();
    await expect(page.getByText('✓ Analytics & reporting')).toBeVisible();
    await expect(page.getByText('✓ Custom training on your data')).toBeVisible();
    
    // Verify Website Creation
    await expect(page.getByRole('heading', { name: 'Website Creation', level: 3 })).toBeVisible();
    await expect(page.getByText('✓ Responsive design')).toBeVisible();
    await expect(page.getByText('✓ SEO optimization')).toBeVisible();
    await expect(page.getByText('✓ Performance optimization')).toBeVisible();
    await expect(page.getByText('✓ Content management systems')).toBeVisible();
    
    // Verify Process Automation
    await expect(page.getByRole('heading', { name: 'Process Automation', level: 3 })).toBeVisible();
    await expect(page.getByText('✓ Workflow automation')).toBeVisible();
    await expect(page.getByText('✓ Data processing')).toBeVisible();
    await expect(page.getByText('✓ Integration solutions')).toBeVisible();
    await expect(page.getByText('✓ Custom dashboards')).toBeVisible();
    
    // Verify Analytics & Insights
    await expect(page.getByRole('heading', { name: 'Analytics & Insights', level: 3 })).toBeVisible();
    await expect(page.getByText('✓ Custom reporting')).toBeVisible();
    await expect(page.getByText('✓ Real-time analytics')).toBeVisible();
    await expect(page.getByText('✓ Data visualization')).toBeVisible();
    await expect(page.getByText('✓ Performance metrics')).toBeVisible();
    
    // Verify CTA section
    await expect(page.getByRole('heading', { name: 'Ready to Transform Your Business?' })).toBeVisible();
    const getStartedBtn = page.getByRole('link', { name: 'Get Started' });
    await expect(getStartedBtn).toBeVisible();
    await expect(getStartedBtn).toHaveAttribute('href', '#contact');
  });

  test('should display projects section correctly', async ({ page }) => {
    await page.getByRole('link', { name: 'Projects', exact: true }).click();
    
    // Verify main projects heading
    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
    await expect(page.getByText('Showcasing my latest work in quality assurance and development.')).toBeVisible();
    
    // Verify Sony Playwright Tests project
    await expect(page.getByRole('heading', { name: 'Sony Playwright Tests', level: 3 })).toBeVisible();
    await expect(page.locator('#projects').getByText('Test Automation')).toBeVisible();
    await expect(page.getByText('Comprehensive Playwright testing framework developed for Sony Music Publishing')).toBeVisible();
    await expect(page.locator('#projects .tech-tag').getByText('Playwright', { exact: true })).toBeVisible();
    await expect(page.getByText('JavaScript')).toBeVisible();
    await expect(page.getByText('HTML')).toBeVisible();
    
    // Verify QA Automation Framework project
    await expect(page.getByRole('heading', { name: 'QA Automation Framework', level: 3 })).toBeVisible();
    await expect(page.getByText('Framework Development')).toBeVisible();
    await expect(page.getByText('Custom-built testing framework designed for scalable quality assurance processes')).toBeVisible();
    await expect(page.locator('#projects .tech-tag').getByText('Selenium', { exact: true })).toBeVisible();
    await expect(page.locator('#projects .tech-tag').getByText('TestNG', { exact: true })).toBeVisible();
    await expect(page.locator('#projects .tech-tag').getByText('Java', { exact: true })).toBeVisible();
    
    // Verify Mobile Testing Suite project
    await expect(page.getByRole('heading', { name: 'Mobile Testing Suite', level: 3 })).toBeVisible();
    await expect(page.getByText('Mobile QA')).toBeVisible();
    await expect(page.getByText('Comprehensive mobile application testing suite covering iOS and Android platforms')).toBeVisible();
    await expect(page.getByText('Appium')).toBeVisible();
    await expect(page.getByText('Cypress')).toBeVisible();
    await expect(page.getByText('React Native')).toBeVisible();
    
    // Verify GitHub CTA section
    await expect(page.getByRole('heading', { name: 'Explore More Projects', level: 3 })).toBeVisible();
    await expect(page.getByText('Check out my GitHub profile for additional projects')).toBeVisible();
  });

  test('should display about section correctly', async ({ page }) => {
    await page.getByRole('link', { name: 'About', exact: true }).click();
    
    // Verify main about heading
    await expect(page.getByRole('heading', { name: 'About Jesse Heidner' })).toBeVisible();
    
    // Verify about description
    await expect(page.getByText('As a Senior Quality Assurance Tester and Expert')).toBeVisible();
    await expect(page.getByText('I specialize in building robust testing frameworks using modern tools')).toBeVisible();
    
    // Verify Core Expertise section
    await expect(page.getByRole('heading', { name: 'Core Expertise', level: 3 })).toBeVisible();
    await expect(page.getByText('Test Automation (Playwright, Selenium)')).toBeVisible();
    await expect(page.getByText('API Testing & Performance Testing')).toBeVisible();
    await expect(page.getByText('CI/CD Integration & DevOps')).toBeVisible();
    await expect(page.getByText('Cross-browser & Mobile Testing')).toBeVisible();
    await expect(page.getByText('Quality Process Optimization')).toBeVisible();
    await expect(page.locator('#about').getByText('Full-stack Development')).toBeVisible();
  });

  test('should display statistics correctly', async ({ page }) => {
    await page.getByRole('link', { name: 'About', exact: true }).click();
    
    // Verify statistics numbers and labels using more specific selectors
    await expect(page.getByText('20', { exact: true })).toBeVisible();
    await expect(page.getByText('Years Experience')).toBeVisible();
    
    await expect(page.getByText('100+')).toBeVisible();
    await expect(page.getByText('Projects Tested')).toBeVisible();
    
    await expect(page.getByText('3x')).toBeVisible();
    await expect(page.getByText('Deployment Speed')).toBeVisible();
    
    await expect(page.locator('#about').getByText('24/7')).toBeVisible();
    await expect(page.getByText('Quality Monitoring')).toBeVisible();
  });

  test('should display footer correctly', async ({ page }) => {
    // Verify footer brand and description
    await expect(page.getByRole('heading', { name: 'Jesse Heidner', level: 3 })).toBeVisible();
    await expect(page.getByText('Senior QA Expert dedicated to delivering exceptional software quality')).toBeVisible();
    
    // Verify footer services links
    await expect(page.getByRole('heading', { name: 'Services', level: 4 })).toBeVisible();
    
    const footerServiceLinks = [
      'Test Automation',
      'Quality Assurance', 
      'QA Consulting',
      'Development'
    ];
    
    for (const serviceLink of footerServiceLinks) {
      const link = page.locator('footer').getByRole('link', { name: serviceLink });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', '#services');
    }
    
    // Verify Connect section
    await expect(page.getByRole('heading', { name: 'Connect', level: 4 })).toBeVisible();
    
    // Verify copyright
    await expect(page.getByText('© 2024 Jesse Heidner. All rights reserved.')).toBeVisible();
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    // Verify h1 (main page title)
    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1).toHaveCount(1);
    await expect(h1).toHaveText('Quality Assurance Excellence. Built to Scale.');
    
    // Verify h2 headings for main sections
    const h2Headings = [
      'Professional QA Services',
      'Business Tools & Solutions', 
      'Featured Projects',
      'About Jesse Heidner',
      'Let\'s Build Quality Together'
    ];
    
    for (const heading of h2Headings) {
      await expect(page.getByRole('heading', { name: heading, level: 2 })).toBeVisible();
    }
    
    // Verify navigation brand heading separately to avoid ambiguity
    await expect(page.getByRole('navigation').getByRole('heading', { name: 'Jesse Heidner', level: 2 })).toBeVisible();
  });
}); 