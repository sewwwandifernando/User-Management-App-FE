"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, UserPlusIcon } from "lucide-react";
import UserForm from "@/components/UserForm";
import { toast } from "sonner";

export default function AddUserPage() {
  const router = useRouter();

  // Handle successful user creation
  const handleSuccess = (result) => {

    // Auto-redirect after 1.5 seconds
    setTimeout(() => {
      router.push("/users");
    }, 1500);
  };

  // Handle form cancellation
  const handleCancel = () => {
  // Check if form has unsaved changes (this would need to be passed from UserForm)
  // For now, we'll use a simple confirmation
  const hasChanges = false; // UserForm will handle this internally

  if (hasChanges) {
    toast("Unsaved changes detected", {
      description: "Are you sure you want to leave without saving?",
      action: {
        label: "Leave anyway",
        onClick: () => router.push("/users"),
      },
      cancel: {
        label: "Continue editing",
        onClick: () => {},
      },
    });
  } else {
    router.push("/users");
  }
};

  return (
    <div className="container mx-auto p-6">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <Button variant="ghost" asChild className="p-2">
            <Link href="/users">
              <ArrowLeftIcon className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <UserPlusIcon className="h-8 w-8" />
              Add New User
            </h1>
            <p className="text-muted-foreground mt-1">
              Create a new user account with all required information
            </p>
          </div>
        </div>
   
      </div>

      {/* User Form */}
      <UserForm
        mode="create"
        onSuccess={handleSuccess}
        onCancel={handleCancel}
      />

      {/* Footer Help */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Need help? Check our{" "}
          <Link href="#" className="text-primary hover:underline">
            user management guide
          </Link>{" "}
          or{" "}
          <Link href="#" className="text-primary hover:underline">
            contact support
          </Link>
        </p>
      </div>
    </div>
  );
}
