export default function template ({children} : {children: React.ReactNode}) {
  return (
    <>
      <input type="text" />
      {children}
    </>
  );
}