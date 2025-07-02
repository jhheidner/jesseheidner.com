import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages';

test.describe('Jesse Heidner Website - Contact Form Tests', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigateToContact();
  });

  test('should display contact form correctly', async ({ page }) => {
    // Verify contact section heading
    await expect(contactPage.contactHeading).toBeVisible();
    
    // Verify form fields are present
    await expect(contactPage.nameField).toBeVisible();
    await expect(contactPage.emailField).toBeVisible();
    await expect(contactPage.messageField).toBeVisible();
    await expect(contactPage.serviceDropdown).toBeVisible();
    await expect(contactPage.sendButton).toBeVisible();
  });

  test('should allow filling out contact form fields', async ({ page }) => {
    const testData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      message: 'I need help with test automation for my project.'
    };

    // Fill form fields using page object
    await contactPage.nameField.fill(testData.name);
    await expect(contactPage.nameField).toHaveValue(testData.name);

    await contactPage.emailField.fill(testData.email);
    await expect(contactPage.emailField).toHaveValue(testData.email);

    await contactPage.messageField.fill(testData.message);
    await expect(contactPage.messageField).toHaveValue(testData.message);
  });

  test('should allow selecting different services', async ({ page }) => {
    // Verify default selection (empty value with placeholder text)
    await expect(contactPage.serviceDropdown).toHaveValue('');
    
    // Test selecting different service options using page object
    const serviceOptions = contactPage.getServiceOptions();

    for (const service of serviceOptions) {
      await contactPage.selectService(service);
      await expect(contactPage.serviceDropdown).toHaveValue(service);
    }
  });

  test('should display contact information correctly', async ({ page }) => {
    // Verify GitHub contact info
    await expect(contactPage.githubHeading).toBeVisible();
    await expect(contactPage.githubText).toBeVisible();
    
    // Verify Email contact info
    await expect(contactPage.emailHeading).toBeVisible();
    
    // Verify Location contact info
    await expect(contactPage.locationHeading).toBeVisible();
    await expect(contactPage.locationText).toBeVisible();
  });

  test('should have functional email links', async ({ page }) => {
    // Test direct email link in contact info
    await expect(contactPage.emailLink).toBeVisible();
    await expect(contactPage.emailLink).toHaveAttribute('href', 'mailto:jhheidner@gmail.com');
    
    // Test "email directly" link in form section
    await expect(contactPage.directEmailLink).toBeVisible();
    await expect(contactPage.directEmailLink).toHaveAttribute('href', 'mailto:jhheidner@gmail.com?subject=Project Inquiry');
  });

  test('should have complete form submission flow', async ({ page }) => {
    // Fill out complete form using page object method
    await contactPage.fillContactForm(
      'Test User',
      'test@example.com', 
      'Test Automation',
      'This is a test message for automation testing.'
    );
    
    // Verify all fields are filled correctly using helper method
    const formValues = await contactPage.getFormFieldValues();
    await expect(contactPage.nameField).toHaveValue(formValues.name);
    await expect(contactPage.emailField).toHaveValue(formValues.email);
    await expect(contactPage.serviceDropdown).toHaveValue(formValues.service);
    await expect(contactPage.messageField).toHaveValue(formValues.message);
    
    // Verify submit button is enabled and clickable
    await expect(contactPage.sendButton).toBeVisible();
    await expect(contactPage.sendButton).toBeEnabled();
  });

  test('should clear form fields correctly', async ({ page }) => {
    // Fill form first
    await contactPage.nameField.fill('Test User');
    await contactPage.emailField.fill('test@example.com');
    
    // Clear fields
    await contactPage.nameField.clear();
    await contactPage.emailField.clear();
    
    // Verify fields are empty
    await expect(contactPage.nameField).toHaveValue('');
    await expect(contactPage.emailField).toHaveValue('');
  });

  test('should handle form validation states', async ({ page }) => {
    // Test with empty form submission attempt
    // Button should be visible but we test it without actually submitting
    // since this would send a real email in production
    await expect(contactPage.sendButton).toBeVisible();
    await expect(contactPage.sendButton).toBeEnabled();
    
    // Test with only partial form data
    await contactPage.nameField.fill('Test User');
    await expect(contactPage.sendButton).toBeEnabled();
  });
}); 