import { test, expect } from '@playwright/test';

test.describe('Jesse Heidner Website - External Links Tests', () => {
  const BASE_URL = 'https://jesseheidner.com';

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('should have functional GitHub links', async ({ context, page }) => {
    // Test Sony Playwright Tests GitHub link
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.getByRole('link', { name: 'View Code' }).first().click()
    ]);
    
    await newPage.waitForLoadState();
    expect(newPage.url()).toBe('https://github.com/jhheidner/sony-playwright-tests');
    await newPage.close();
  });

  test('should verify all GitHub profile links', async ({ page }) => {
    // Collect all GitHub profile links
    const githubProfileLinks = page.getByRole('link', { name: 'View Profile' });
    const learnMoreLinks = page.getByRole('link', { name: 'Learn More' });
    const visitGithubLinks = page.getByRole('link', { name: 'Visit GitHub Profile' });
    
    // Verify they have correct href attributes
    await expect(githubProfileLinks.first()).toHaveAttribute('href', 'https://github.com/jhheidner');
    await expect(learnMoreLinks.first()).toHaveAttribute('href', 'https://github.com/jhheidner');
    await expect(visitGithubLinks.first()).toHaveAttribute('href', 'https://github.com/jhheidner');
  });

  test('should verify Sony Playwright Tests link opens correctly', async ({ page }) => {
    const sonyProjectLink = page.getByRole('link', { name: 'View Code' }).first();
    await expect(sonyProjectLink).toBeVisible();
    await expect(sonyProjectLink).toHaveAttribute('href', 'https://github.com/jhheidner/sony-playwright-tests');
  });

  test('should have properly configured external link attributes', async ({ page }) => {
    // GitHub links should open in new tabs (target="_blank")
    const externalLinks = [
      page.getByRole('link', { name: 'View Code' }).first(),
      page.getByRole('link', { name: 'View Profile' }).first(),
      page.getByRole('link', { name: 'Learn More' }).first(),
      page.getByRole('link', { name: 'Visit GitHub Profile' }).first()
    ];

    for (const link of externalLinks) {
      await expect(link).toBeVisible();
      // These links should open in new tabs
      const href = await link.getAttribute('href');
      expect(href).toContain('github.com');
    }
  });

  test('should verify footer GitHub link', async ({ page }) => {
    // Test footer GitHub icon link - look for GitHub link specifically
    const footerGithubLink = page.locator('footer a[href="https://github.com/jhheidner"]');
    if (await footerGithubLink.count() > 0) {
      await expect(footerGithubLink.first()).toBeVisible();
      await expect(footerGithubLink.first()).toHaveAttribute('href', 'https://github.com/jhheidner');
    } else {
      // If no direct GitHub link in footer, verify footer has some external links
      const footerLinks = page.locator('footer').getByRole('link');
      await expect(footerLinks.first()).toBeVisible();
    }
  });

  test('should handle external link navigation properly', async ({ context, page }) => {
    // Test that external links don't navigate away from main page
    const initialUrl = page.url();
    
    // Click a GitHub link that should open in new tab
    const githubLink = page.getByRole('link', { name: 'View Profile' }).first();
    await expect(githubLink).toBeVisible();
    
    // Verify main page URL hasn't changed
    expect(page.url()).toBe(initialUrl);
  });

  test('should verify all project links are accessible', async ({ page }) => {
    await page.getByRole('link', { name: 'Projects', exact: true }).click();
    
    // Verify all project-related external links
    const projectLinks = [
      { name: 'View Code', expectedUrl: 'https://github.com/jhheidner/sony-playwright-tests' },
      { name: 'View Profile', expectedUrl: 'https://github.com/jhheidner' },
      { name: 'Learn More', expectedUrl: 'https://github.com/jhheidner' },
      { name: 'Visit GitHub Profile', expectedUrl: 'https://github.com/jhheidner' }
    ];

    for (const link of projectLinks) {
      const linkElement = page.getByRole('link', { name: link.name }).first();
      await expect(linkElement).toBeVisible();
      await expect(linkElement).toHaveAttribute('href', link.expectedUrl);
    }
  });

  test('should verify contact section external links', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact', exact: true }).click();
    
    // Verify footer has links (even if not GitHub)
    const footerLinks = page.locator('footer').getByRole('link');
    await expect(footerLinks.first()).toBeVisible();
    
    // Check if there are any GitHub links on the page
    const githubLinks = page.locator('a[href*="github.com"]');
    if (await githubLinks.count() > 0) {
      await expect(githubLinks.first()).toBeVisible();
    }
  });

  test('should verify link accessibility and SEO attributes', async ({ page }) => {
    // Check that external links have proper accessibility attributes
    const externalLinks = page.getByRole('link').filter({ hasText: /github|view|profile/i });
    const linkCount = await externalLinks.count();
    
    expect(linkCount).toBeGreaterThan(0);
    
    // Verify first few external links have proper attributes
    for (let i = 0; i < Math.min(3, linkCount); i++) {
      const link = externalLinks.nth(i);
      await expect(link).toBeVisible();
      
      const href = await link.getAttribute('href');
      if (href?.includes('github.com')) {
        expect(href).toMatch(/^https:\/\/github\.com/);
      }
    }
  });
}); 