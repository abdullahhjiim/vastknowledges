import WriteBlog from "@/components/Write/WriteBlog";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";


const Write = async () => {
    const session = await auth();

    if(!session?.user) {
        redirect('/login');
    }
    return (
        <div className="container">
            <WriteBlog />
        </div>
    )
}

export default Write;