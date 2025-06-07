import { SignUp } from '@clerk/nextjs';

export function triggerSignUp() {
  return <SignUp />;
}

export default function Page() {
  return triggerSignUp();
}