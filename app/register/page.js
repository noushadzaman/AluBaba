import AuthActions from "@/components/auth/AuthActions";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div class="contain py-16">
      <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 class="text-2xl uppercase font-medium mb-1">Create an account</h2>
        <p class="text-gray-600 mb-6 text-sm">Register for new cosutumer</p>
        <RegisterForm />
        <AuthActions isLogin={false}/>
      </div>
    </div>
  );
}
