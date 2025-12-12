export type EmployeeRole = 'admin' | 'recruiter' | 'manager';

export interface EmployeeUser {
  id: string;
  name: string;
  email: string;
  role: EmployeeRole;
}

export async function getMockUser(): Promise<EmployeeUser | null> {
  // TODO: Replace with real auth (Supabase or Clerk).
  return {
    id: 'demo-employee-1',
    name: 'Demo Employee',
    email: 'demo@purpleunicorn.com',
    role: 'admin',
  };
}
