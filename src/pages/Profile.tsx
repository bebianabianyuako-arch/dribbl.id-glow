import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoginForm = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 text-primary">Welcome Back</h2>
        <p className="text-muted-foreground">Sign in to access your account</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="bg-secondary border-border focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-foreground">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            className="bg-secondary border-border focus:border-primary"
          />
        </div>
      </div>

      <Button
        className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-bold"
        onClick={() => setIsLoggedIn(true)}
      >
        Sign In
      </Button>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <button className="text-primary hover:underline font-semibold">
            Register
          </button>
        </p>
      </div>
    </div>
  );

  const ProfileView = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-cta rounded-full flex items-center justify-center text-4xl">
          👤
        </div>
        <h2 className="text-2xl font-bold text-primary">John Doe</h2>
        <p className="text-muted-foreground">john.doe@example.com</p>
      </div>

      <Card className="p-5 bg-card space-y-4">
        <div className="flex justify-between items-center py-3 border-b border-border">
          <span className="font-semibold">Favorite Team</span>
          <span className="text-muted-foreground">Lakers 🏀</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border">
          <span className="font-semibold">Events Attended</span>
          <span className="text-muted-foreground">12</span>
        </div>
        <div className="flex justify-between items-center py-3">
          <span className="font-semibold">Member Since</span>
          <span className="text-muted-foreground">Jan 2025</span>
        </div>
      </Card>

      <div className="space-y-3">
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Edit Profile
        </Button>
        <Button variant="outline" className="w-full border-muted-foreground text-muted-foreground hover:bg-muted">
          Settings
        </Button>
        <Button
          variant="destructive"
          className="w-full"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pb-20 px-4 pt-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        {isLoggedIn ? <ProfileView /> : <LoginForm />}
      </div>
    </div>
  );
};

export default Profile;
