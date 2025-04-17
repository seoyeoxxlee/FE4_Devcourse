export default function Button ({
    children,
    type,
}: {
    children: React.ReactNode;
    type: "submit"| "reset" | "button";
}) {
    return (
        <>
            <button type={type}>{children}</button>
        </>
    );
}