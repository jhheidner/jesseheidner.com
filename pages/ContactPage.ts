import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContactPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Contact section elements
  get contactHeading() { return this.page.getByRole('heading', { name: 'Let\'s Build Quality Together' }); }
  get contactDescription() { return this.page.getByText('Ready to elevate your software quality?'); }

  // Contact info elements
  get githubHeading() { return this.page.getByRole('heading', { name: 'GitHub', level: 4 }); }
  get githubText() { return this.page.getByText('github.com/jhheidner'); }
  get emailHeading() { return this.page.getByRole('heading', { name: 'Email', level: 4 }); }
  get emailLink() { return this.page.getByRole('link', { name: 'jhheidner@gmail.com' }).first(); }
  get locationHeading() { return this.page.getByRole('heading', { name: 'Location', level: 4 }); }
  get locationText() { return this.page.getByText('Remote & On-site Available'); }

  // Form elements
  get nameField() { return this.page.getByRole('textbox', { name: 'Your Name' }); }
  get emailField() { return this.page.getByRole('textbox', { name: 'Your Email' }); }
  get serviceDropdown() { return this.page.getByRole('combobox'); }
  get messageField() { return this.page.getByRole('textbox', { name: 'Tell me about your project' }); }
  get sendButton() { return this.page.getByRole('button', { name: 'Send Message' }); }
  get directEmailText() { return this.page.getByText('Or email directly:'); }
  get directEmailLink() { return this.page.getByRole('link', { name: 'jhheidner@gmail.com' }).last(); }

  // Form actions
  async fillContactForm(name: string, email: string, service: string, message: string) {
    await this.nameField.fill(name);
    await this.emailField.fill(email);
    await this.serviceDropdown.selectOption(service);
    await this.messageField.fill(message);
  }

  async submitForm() {
    await this.sendButton.click();
  }

  async navigateToContact() {
    await this.gotoSection('contact');
  }

  async selectService(service: string) {
    await this.serviceDropdown.selectOption(service);
  }

  // Service options for testing
  getServiceOptions() {
    return [
      'Test Automation',
      'Quality Assurance', 
      'QA Consulting',
      'Development Project'
    ];
  }

  // Validation helpers
  async getFormFieldValues() {
    return {
      name: await this.nameField.inputValue(),
      email: await this.emailField.inputValue(),
      service: await this.serviceDropdown.inputValue(),
      message: await this.messageField.inputValue()
    };
  }
} 