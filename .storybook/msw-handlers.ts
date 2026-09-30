import { http, HttpResponse } from 'msw';

export const mswHandlers = [
  http.get('https://api.example.com/payroll/summary', () =>
    HttpResponse.json({
      totalEmployees: 42,
      monthlyPayroll: 125000,
      currency: 'USD',
      payPeriod: '2026-09',
    })
  ),
];
