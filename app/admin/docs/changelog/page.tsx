export default async function Page() {
  // Artificial delay to demonstrate the Next.js loading UI
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex flex-col items-center justify-center min-h-[50vh] rounded-xl bg-muted/50">
        <h1 className="text-4xl font-bold text-muted-foreground">Changelog Page</h1>
        <p className="mt-4 text-muted-foreground">This is a dynamically loaded dummy page for /docs/changelog</p>
      </div>
    </div>
  );
}
