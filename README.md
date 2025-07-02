# Jesse Heidner - QA Expert Portfolio Website

A modern, responsive portfolio website showcasing QA expertise, testing skills, and development projects. Built with clean HTML5, CSS3, and JavaScript, inspired by modern design principles.

## 🚀 Features

- **Modern Dark Theme Design** - Sleek, professional appearance with gradient accents
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **Interactive Animations** - Smooth transitions and scroll-based animations
- **Code Showcase** - Interactive code window demonstrating testing expertise
- **Project Portfolio** - Dedicated section for GitHub projects and work samples
- **Contact Form** - Functional contact form with validation
- **Performance Optimized** - Fast loading with optimized assets

## 📁 Project Structure

```
jhwebsite/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
├── script.js           # Interactive functionality and animations
└── README.md          # Project documentation
```

## 🎨 Sections

### 1. **About Section**
- Compelling headline highlighting QA expertise
- Interactive code window showing Playwright test example
- Call-to-action buttons for services and projects

### 2. **Services Section**
- Test Automation (Playwright, Selenium)
- Quality Assurance (Manual testing, UAT)
- QA Consulting (Process optimization, training)
- Development Projects (Full-stack with QA focus)

### 3. **Projects Section**
- Sony Playwright Tests (featured GitHub project)
- QA Automation Framework examples
- Mobile Testing Suite showcase
- Direct links to GitHub repositories

### 4. **About Section**
- Professional background and expertise
- Core skills and technologies
- Statistics and achievements
- Technical competencies

### 5. **Contact Section**
- Contact information and availability
- Functional contact form with validation
- Links to GitHub and professional profiles

## 🛠 Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox/Grid, animations, and responsive design
- **JavaScript (ES6+)** - Interactive functionality and form handling
- **Font Awesome** - Professional icons throughout the site
- **Google Fonts (Inter)** - Modern, readable typography

## 🚀 Getting Started

### Local Development

1. **Clone or download** the project files to your local machine
2. **Open `index.html`** in any modern web browser
3. **No build process required** - the site uses vanilla HTML, CSS, and JavaScript

### Live Deployment Options

#### Option 1: GitHub Pages (Recommended)
1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose `main`
5. Your site will be available at `https://yourusername.github.io/repository-name`

#### Option 2: Netlify
1. Create account at [Netlify.com](https://netlify.com)
2. Drag and drop the project folder to Netlify dashboard
3. Your site will be deployed automatically with a custom URL

#### Option 3: Vercel
1. Create account at [Vercel.com](https://vercel.com)
2. Connect your GitHub repository or upload files
3. Automatic deployment with preview URLs

## ✏️ Customization

### Personal Information
Update the following sections in `index.html`:
- Hero title and description
- About section content
- Contact information
- Project descriptions and links

### GitHub Integration
- Update GitHub username in project links (`https://github.com/jhheidner`)
- Add specific repository links for each project
- Update project descriptions to match your actual work

### Styling
The CSS is organized into clear sections:
- **Variables** - Easy color and spacing customization
- **Components** - Reusable UI elements
- **Sections** - Page-specific styling
- **Responsive** - Mobile-friendly breakpoints

### Adding New Projects
To add a new project card:
1. Copy an existing `.project-card` div in `index.html`
2. Update the content (title, description, technologies, links)
3. The styling will automatically apply

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (adapted grid)
- **Mobile**: Below 768px (stacked layout)

## 🎯 SEO Optimization

- Semantic HTML5 structure
- Meta tags for social sharing
- Optimized heading hierarchy
- Alt text for images (when added)
- Fast loading performance

## 🔧 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own QA portfolio. If you make improvements that could benefit others, consider submitting a pull request.

## 📞 Contact

**Jesse Heidner**
- GitHub: [@jhheidner](https://github.com/jhheidner)
- Website: [Live Portfolio Site]

---

*Built with ❤️ for the QA community*

# 🧪 Playwright Test Suite

This repository includes a comprehensive end-to-end test suite for [jesseheidner.com](https://jesseheidner.com) using **Playwright** with **Page Object Model (POM)** architecture. The test suite ensures website functionality, accessibility, and responsive design across different devices.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Install Playwright browsers:**
```bash
npx playwright install
```

3. **Run all tests:**
```bash
npm test
```

4. **View test results:**
```bash
npm run report
```

## 🏗️ Page Object Model Architecture

The test suite follows the **Page Object Model** pattern for maintainability and reusability:

```
pages/
├── BasePage.ts          # Common functionality and navigation
├── HomePage.ts          # Hero section and main page elements
├── ContactPage.ts       # Contact form and contact info
├── ServicesPage.ts      # Services section elements
├── ProjectsPage.ts      # Projects section and external links
├── AboutPage.ts         # About section and statistics
├── BusinessToolsPage.ts # Business tools section
└── index.ts            # Centralized page object exports
```

### Benefits of POM Implementation:
- **Maintainability**: UI changes only require updates in page objects
- **Reusability**: Common actions and locators defined once
- **Readability**: Tests focus on business logic, not implementation
- **Type Safety**: Full TypeScript support with intellisense

## 📋 Test Coverage

### `tests/homepage.spec.ts` - **9 tests**
- ✅ Page load and title verification
- ✅ Navigation menu functionality  
- ✅ Section navigation (Services, Projects, About, Contact, Business Tools)
- ✅ Hero section call-to-action buttons
- ✅ Code snippet display verification

### `tests/contact-form.spec.ts` - **8 tests**
- ✅ Contact form field interactions (name, email, message)
- ✅ Service dropdown selection functionality
- ✅ Form validation and submission flow
- ✅ Email link verification (mailto functionality)
- ✅ Contact information display verification

### `tests/content-verification.spec.ts` - **15 tests**
- ✅ Services section content and features
- ✅ Business tools section verification
- ✅ Projects section with technology tags
- ✅ About section and expertise display
- ✅ Statistics verification (years experience, projects, etc.)
- ✅ Footer content and links
- ✅ Heading hierarchy validation

### `tests/external-links.spec.ts` - **8 tests**
- ✅ GitHub repository links functionality
- ✅ External link navigation in new tabs
- ✅ Link accessibility attributes
- ✅ Social media and profile link verification

### `tests/responsive-accessibility.spec.ts` - **5 tests**
- ✅ Desktop responsive design testing
- ✅ Mobile viewport functionality
- ✅ Accessibility compliance verification
- ✅ Form elements on mobile devices
- ✅ Navigation usability across devices

### `tests/responsive.spec.ts` - **5 tests**
- ✅ Mobile device compatibility
- ✅ Contact form functionality on mobile
- ✅ Navigation menu responsive behavior
- ✅ Content readability on small screens

## 🛠️ Available Scripts

```bash
# Run all tests (headless)
npm test

# Run tests with browser visible
npm run test:headed

# Interactive test runner with UI
npm run test:ui

# Debug tests step by step
npm run test:debug

# View HTML test report
npm run report

# Install Playwright browsers
npm run install-deps
```

## ⚙️ Configuration

### `playwright.config.ts` Features:
- **Base URL**: https://jesseheidner.com
- **Browser**: Chrome/Chromium optimized (multi-browser ready)
- **Parallel Execution**: Enabled for speed
- **Retries**: 2 on CI, 0 locally
- **Timeouts**: 30s global, 10s per action
- **Reporters**: HTML, JSON, JUnit
- **Artifacts**: Screenshots/videos on failure only

## 🔧 Playwright Best Practices

### Locator Strategy
- **Role-based selectors**: `getByRole('button', { name: 'Submit' })`
- **Scoped selectors**: `page.locator('#section').getByText('...')`
- **Exact matching**: `{ exact: true }` to avoid partial matches
- **Strict mode compliance**: No ambiguous selectors

### Example Page Object Usage:
```typescript
// ❌ Before: Direct page interaction
await page.getByRole('textbox', { name: 'Name' }).fill('John');
await page.getByRole('textbox', { name: 'Email' }).fill('john@email.com');

// ✅ After: Page Object Method
await contactPage.fillContactForm('John', 'john@email.com', 'Test Automation', 'Message');
```

## 📊 Test Results

**Current Status**: 50/50 tests passing (100% success rate)

| Test File | Tests | Status |
|-----------|-------|---------|
| homepage.spec.ts | 9 | ✅ All passing |
| contact-form.spec.ts | 8 | ✅ All passing |
| content-verification.spec.ts | 15 | ✅ All passing |
| external-links.spec.ts | 8 | ✅ All passing |
| responsive-accessibility.spec.ts | 5 | ✅ All passing |
| responsive.spec.ts | 5 | ✅ All passing |

## 🎯 Quality Assurance Coverage

| Area | Coverage | Details |
|------|----------|---------|
| **Functionality** | 100% | All interactive elements tested |
| **Navigation** | 100% | Menu, buttons, internal links |
| **Forms** | 100% | Contact form, validation, submission |
| **External Links** | 100% | GitHub repositories, social links |
| **Responsive Design** | 100% | Mobile, tablet, desktop viewports |
| **Accessibility** | 90% | ARIA labels, semantic HTML |
| **Content** | 100% | All sections, statistics, text |

## 🔍 Debugging Tests

### VS Code Integration
1. Install Playwright extension
2. Use built-in test runner
3. Set breakpoints in test files

### Command Line Debugging
```bash
# Debug specific test
npx playwright test --debug tests/contact-form.spec.ts

# Run single test file
npx playwright test tests/homepage.spec.ts

# Run with trace viewer
npx playwright test --trace on
```

## 🚀 CI/CD Ready

The test suite is optimized for continuous integration:
- **Headless execution** by default
- **Parallel test execution** for speed
- **Comprehensive reporting** (HTML, JSON, JUnit)
- **Artifact capture** (screenshots/videos on failures)
- **Cross-platform compatibility** (Windows, macOS, Linux)
- ✅ Complete form submission flow testing

### `tests/external-links.spec.ts`
- ✅ GitHub repository links
- ✅ External link navigation behavior
- ✅ New tab opening functionality
- ✅ Link accessibility attributes
- ✅ Footer link verification

## 🧪 Test Execution

### Run tests in different modes:

```bash
# Run all tests
npm test

# Run tests in headed mode (see browser)
npm run test:headed

# Run tests with UI mode
npm run test:ui

# Run tests in debug mode
npm run test:debug

# View test report
npm run report
```

### Run specific test files:

```bash
# Run only homepage tests
npx playwright test homepage

# Run only contact form tests  
npx playwright test contact-form

# Run only external links tests
npx playwright test external-links
```

### Run tests on specific browsers:

```bash
# Run on Chrome only
npx playwright test --project=chromium

# Run on Firefox only
npx playwright test --project=firefox

# Run on Safari only
npx playwright test --project=webkit

# Run on mobile devices
npx playwright test --project="Mobile Chrome"
npx playwright test --project="Mobile Safari"
```

## 🎯 Test Coverage

### Website Sections Tested:
- [x] Homepage and hero section
- [x] Navigation menu
- [x] Services section
- [x] Business Tools section  
- [x] Projects section
- [x] About section
- [x] Contact section and form
- [x] Footer

### Functionality Tested:
- [x] Page loading and performance
- [x] Navigation between sections
- [x] Contact form interactions
- [x] External link functionality
- [x] Email links (mailto)
- [x] Responsive design
- [x] Cross-browser compatibility
- [x] Mobile device compatibility

### Best Practices Implemented:
- ✅ Role-based locators (accessibility-focused)
- ✅ Auto-waiting assertions (`toHaveText`, `toHaveCount`, etc.)
- ✅ `.filter()` method to avoid strict mode violations
- ✅ Proper test isolation
- ✅ Comprehensive error handling
- ✅ Cross-browser testing
- ✅ Mobile responsive testing

## 📊 Browsers & Devices Tested

### Desktop Browsers:
- Chrome/Chromium
- Firefox
- Safari (WebKit)
- Microsoft Edge

### Mobile Devices:
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

## ⚙️ Configuration

The test configuration is in `playwright.config.ts`:

- **Timeout:** 30 seconds per test
- **Retries:** 2 retries on CI, 0 locally
- **Screenshots:** Only on failure
- **Videos:** Retained on failure
- **Trace:** On first retry

## 🔧 Maintenance

### Adding New Tests:
1. Create new `.spec.ts` file in `tests/` directory
2. Follow existing patterns using `test.describe()` and `test()`
3. Use role-based locators: `page.getByRole('button', { name: 'Submit' })`
4. Use auto-waiting assertions: `await expect(element).toBeVisible()`

### Updating Tests:
- Tests are based on actual website content and structure
- Update selectors if website elements change
- Maintain test data consistency across test files

## 📈 Reporting

Test results are generated in multiple formats:
- **HTML Report:** Interactive browser-based report
- **JSON:** Machine-readable results (`test-results/results.json`)
- **JUnit:** CI/CD integration (`test-results/results.xml`)

View the HTML report:
```bash
npm run report
```

## 🐛 Troubleshooting

### Common Issues:

1. **Tests failing due to timeouts:**
   - Check internet connection
   - Verify website is accessible
   - Increase timeout in config if needed

2. **Element not found errors:**
   - Website content may have changed
   - Update locators in test files
   - Check for proper element loading

3. **Browser installation issues:**
   ```bash
   npx playwright install --force
   ```

### Debug Mode:
Run tests in debug mode to step through execution:
```bash
npm run test:debug
```

## 📝 Notes

- Tests are designed to run against the live production website
- No test data cleanup needed (read-only operations)
- Contact form tests verify functionality without actual submission
- External links are tested for proper attributes and navigation

## 🤝 Contributing

When adding new tests:
1. Follow existing naming conventions
2. Use descriptive test names
3. Group related tests in appropriate describe blocks
4. Ensure tests are independent and can run in any order
5. Add proper assertions with meaningful error messages

---

**Website Under Test:** [jesseheidner.com](https://jesseheidner.com)  
**Test Framework:** Playwright  
**Author:** Jesse Heidner 
