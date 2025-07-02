import { test, expect } from '@playwright/test';

test.describe('Jesse Heidner Website - Responsive Design Tests', () => {
  const BASE_URL = 'https://jesseheidner.com';

  test.describe('Mobile Responsive Tests', () => {
    test('should display correctly on mobile devices', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto(BASE_URL);
      
      // Verify page loads on mobile
      await expect(page).toHaveTitle('Jesse Heidner - Senior QA Expert & Developer');
      
      // Verify navigation is accessible on mobile
      const navigation = page.getByRole('navigation');
      await expect(navigation).toBeVisible();
      
      // Verify main heading is readable on mobile
      const mainHeading = page.getByRole('heading', { name: 'Quality Assurance Excellence. Built to Scale.' });
      await expect(mainHeading).toBeVisible();
    });

    test('should have working contact form on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto(BASE_URL);
      
      // Navigate to contact form
      await page.goto(`${BASE_URL}/#contact`);
      
      // Test form interaction on mobile
      const nameField = page.getByRole('textbox', { name: 'Your Name' });
      await nameField.fill('Mobile Test User');
      await expect(nameField).toHaveValue('Mobile Test User');
      
      // Test dropdown on mobile
      const serviceDropdown = page.getByRole('combobox');
      await serviceDropdown.selectOption('Test Automation');
      await expect(serviceDropdown).toHaveValue('Test Automation');
    });
  });

  test.describe('Accessibility Tests', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(BASE_URL);
    });

    test('should have proper heading hierarchy', async ({ page }) => {
      // Check for single h1
      const h1Elements = page.getByRole('heading', { level: 1 });
      await expect(h1Elements).toHaveCount(1);
      
      // Verify h1 content
      await expect(h1Elements).toHaveText('Quality Assurance Excellence. Built to Scale.');
    });

    test('should have accessible form elements', async ({ page }) => {
      await page.goto(`${BASE_URL}/#contact`);
      
      // Verify form has proper labels and roles
      await expect(page.getByRole('textbox', { name: 'Your Name' })).toBeVisible();
      await expect(page.getByRole('textbox', { name: 'Your Email' })).toBeVisible();
      await expect(page.getByRole('textbox', { name: 'Tell me about your project' })).toBeVisible();
      await expect(page.getByRole('combobox')).toBeVisible();
      await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
    });
  });

  test.describe('Performance Tests', () => {
    test('should load page efficiently', async ({ page }) => {
      const startTime = Date.now();
      await page.goto(BASE_URL);
      const loadTime = Date.now() - startTime;
      
      // Basic performance check
      expect(loadTime).toBeLessThan(10000); // 10 seconds max
      
      // Verify critical content is visible
      await expect(page.getByRole('heading', { name: 'Quality Assurance Excellence. Built to Scale.' })).toBeVisible();
    });
  });
}); 