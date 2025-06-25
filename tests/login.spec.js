import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Fill in username
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');

  // Fill in password
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('learning');

  // Select user type from dropdown
  await page.getByRole('combobox').selectOption('teach');

  // Accept terms and conditions
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();

  // Click Sign In button
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Add 'iphone X' product to cart
  await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' }).getByRole('button').click();

  // Go to cart/checkout page
  await page.getByText('Checkout ( 1 ) (current)').click();
  await page.getByRole('button', { name: 'Checkout' }).click();

  // Enter delivery location
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).click();
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).pressSequentially('Ind');
  // Wait for and select 'India' from suggestions
  const suggestion = page.locator('.suggestions ul li a', { hasText: 'India' });
  await suggestion.waitFor({ timeout: 6000 });
  await suggestion.click();

  // Agree to final terms
  await page.getByText('I agree with the term &').click();

  // Complete the purchase
  await page.getByRole('button', { name: 'Purchase' }).click();

  // Verify the success message after purchase
  await expect(page.locator('app-checkout')).toContainText('× Success! Thank you! Your order will be delivered in next few weeks :-).');
});