"use client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState, useEffect } from "react";
import { registerAction } from "../_actions/authActions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [state, action, pending] = useActionState(registerAction, null);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Registration successful");
      router.push("/login");
    } else {
      toast.error(state.message || "Registration failed");
    }
  }, [state, router]);
  return (
    <form action={action} className="space-y-4">
      <Card className="p-5 space-y-4">
        <Input name="name" type="text" placeholder="Enter Your Name" required />

        <Input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
        />

        <Input
          name="password"
          type="password"
          placeholder="Enter Your Password"
          required
        />

        <Input
          name="profilePhoto"
          type="text"
          placeholder="Profile Photo URL (Optional)"
        />

        <Button type="submit">{pending ? "Submitting..." : "Register"}</Button>
      </Card>
    </form>
  );
};

export default RegisterForm;
