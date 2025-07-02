import { test, expect } from '@playwright/test';
import { HomePage } from '../pages';

test.describe('Jesse Heidner Website - Homepage Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToHome();
  });

  test('should load homepage correctly', async ({ page }) => {
    // Verify page title
    await expect(page).toHaveTitle('Jesse Heidner - Senior QA Expert & Developer');
    
    // Verify URL
    await expect(page).toHaveURL(homePage.baseURL);
    
    // Verify main heading is visible
    await expect(homePage.mainHeading).toBeVisible();
    
    // Verify hero description
    await expect(homePage.heroDescription).toBeVisible();
  });

  test('should display navigation menu correctly', async ({ page }) => {
    // Verify navigation is visible
    await expect(homePage.navigation).toBeVisible();
    
    // Verify logo/brand name
    await expect(homePage.brandHeading).toBeVisible();
    
    // Verify all navigation links using page object
    const navLinks = await homePage.verifyNavigationLinks();
    
    for (const navLink of navLinks) {
      await expect(navLink.link).toBeVisible();
      await expect(navLink.link).toHaveAttribute('href', navLink.href);
    }
  });

  test('should navigate to different sections correctly', async ({ page }) => {
    // Test Services navigation
    await homePage.servicesLink.click();
    await expect(page).toHaveURL(`${homePage.baseURL}/#services`);
    
    // Test Projects navigation  
    await homePage.projectsLink.click();
    await expect(page).toHaveURL(`${homePage.baseURL}/#projects`);
    
    // Test Contact navigation
    await homePage.contactLink.click();
    await expect(page).toHaveURL(`${homePage.baseURL}/#contact`);
    
    // Test About navigation
    await homePage.aboutLink.click();
    await expect(page).toHaveURL(`${homePage.baseURL}/#about`);

    // Test Business Tools navigation
    await homePage.businessToolsLink.click();
    await expect(page).toHaveURL(`${homePage.baseURL}/#business-tools`);
  });

  test('should display hero section call-to-action buttons', async ({ page }) => {
    // Verify "Explore Services" button
    await expect(homePage.exploreServicesButton).toBeVisible();
    await expect(homePage.exploreServicesButton).toHaveAttribute('href', '#services');
    
    // Verify "View Projects" button
    await expect(homePage.viewProjectsButton).toBeVisible();
    await expect(homePage.viewProjectsButton).toHaveAttribute('href', '#projects');
  });

  test('should display code snippet in hero section', async ({ page }) => {
    // Verify the decorative code snippet is visible
    await expect(homePage.codeSnippet).toBeVisible();
    await expect(page.getByText('describe(\'User Login Flow\', () => {')).toBeVisible();
    await expect(page.getByText('// Test passes ✓')).toBeVisible();
  });
}); 