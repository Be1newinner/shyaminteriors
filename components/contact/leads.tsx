export default async function Leads({ email, name, comment }: { email: string, name: string, comment: string }) {
    const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            name,
            comment,
        }),
    });
    const data = await res.json();
    return data;

}
