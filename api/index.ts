export async function GET(req: Request) {
    try {
        return Response.json({ message: "Contact form submitted successfully" });
    } catch (error) {
        console.log(error);
        return Response.json({ error: "Internal server error" });
    }
}