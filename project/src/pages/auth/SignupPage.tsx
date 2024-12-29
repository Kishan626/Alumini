import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/auth/AuthForm';
import { Card } from '../../components/ui/Card';

export function SignupPage() {
  const navigate = useNavigate();
  const [role, setRole] = React.useState<'student' | 'alumni'>('student');

  const handleSignup = (data: any) => {
    // Handle signup logic here
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">I am a:</label>
            <div className="mt-2 flex gap-4">
              {(['student', 'alumni'] as const).map((r) => (
                <label key={r} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value={r}
                    checked={role === r}
                    onChange={(e) => setRole(e.target.value as typeof role)}
                    className="form-radio h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2 capitalize">{r}</span>
                </label>
              ))}
            </div>
          </div>
          <AuthForm type="signup" role={role} onSubmit={handleSignup} />
        </Card>
      </div>
    </div>
  );
}