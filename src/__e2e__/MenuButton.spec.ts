import { test, expect } from '@playwright/test';

test('Page has correct title', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page).toHaveTitle(/React Webpack Typescript - Luke Liu/);
});


test('click to show menu items ', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.getByRole('button').click();
  await expect(page.getByRole('menu')).toBeVisible();
});

test('click items should close menu', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.getByRole('button').click();
  await page.getByText('Settings').click();
  await expect(page.getByRole('menu')).not.toBeVisible()
});