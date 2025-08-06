import FormWithRhfAndZod from "@/components/form-with-rhf-and-zod";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-6">
      <div className="w-full max-w-md">
        <FormWithRhfAndZod />
      </div>
    </main>
  );
}
