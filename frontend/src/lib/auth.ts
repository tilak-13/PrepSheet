const KEY = 'prepsheet_mock_auth';

export function isLoggedIn(): boolean {
  return localStorage.getItem(KEY) === 'true';
}

export function loginMock(): void {
  localStorage.setItem(KEY, 'true');
}

export function logoutMock(): void {
  localStorage.removeItem(KEY);
}
