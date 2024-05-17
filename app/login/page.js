import AuthActions from "@/components/auth/AuthActions";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div class="contain py-16">
      <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 class="text-2xl uppercase font-medium mb-1">Login</h2>
        <p class="text-gray-600 mb-6 text-sm">welcome back customer</p>
        <LoginForm />
        <AuthActions isLogin={true} />
      </div>
    </div>
  );
}
